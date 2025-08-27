// src/components/OurOrgMembers.jsx
import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";

// Dummy generator (replace later with API)
const roles = ["Admin", "Accountant", "Member", "General Member"];
const generateMembers = (count, start = 0) =>
  Array.from({ length: count }, (_, i) => {
    const id = start + i + 1;
    return {
      id,
      name: `Member ${id}`,
      role: roles[id % roles.length],
      image: `https://i.pravatar.cc/150?img=${(id % 70) + 1}`,
      description:
        "Active member of Hazrat Abul Khair Sultanpury (RH.) Association Bangladesh.",
    };
  });

export default function OurOrgMembers() {
  const [members, setMembers] = useState(() => generateMembers(16));
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const sentinelRef = useRef(null);

  const fetchMore = useCallback(() => {
    if (loading || !hasMore) return;
    setLoading(true);
    setTimeout(() => {
      const next = generateMembers(16, members.length);
      const updated = [...members, ...next];
      setMembers(updated);
      if (updated.length >= 120) setHasMore(false); // stop after 120 cards (demo)
      setLoading(false);
    }, 600);
  }, [loading, hasMore, members]);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting) fetchMore();
      },
      { root: null, rootMargin: "240px", threshold: 0 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [fetchMore]);

  return (
    <section className="bg-gradient-to-b from-white via-gray-50 to-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Organization Members
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Meet the active members of{" "}
            <span className="font-semibold">
              Hazrat Abul Khair Sultanpury (RH.) Association Bangladesh
            </span>
            . Our members are the backbone of the organization and community.
          </p>
        </div>

        {/* Members Grid */}
        <div className="grid gap-6 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {members.map((m) => (
            <motion.article
              key={m.id}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur shadow-md hover:shadow-xl border border-gray-100"
            >
              {/* Top accent */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-500 via-green-500 to-lime-500" />

              <div className="p-5 flex flex-col items-center text-center">
                <div className="relative">
                  <img
                    src={m.image}
                    alt={m.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
                  />
                  <span className="absolute -bottom-1 -right-1 px-2 py-0.5 text-[11px] rounded-full bg-emerald-600 text-white">
                    {m.role}
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  {m.name}
                </h3>
                <p className="mt-1 text-sm text-gray-600">{m.description}</p>

                <button
                  type="button"
                  className="mt-4 inline-flex items-center justify-center rounded-lg px-3 py-2 text-sm font-medium bg-gray-900 text-white hover:bg-gray-800 transition"
                >
                  View Profile
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Loading state */}
        {loading && (
          <div className="grid gap-6 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="animate-pulse rounded-2xl bg-white/60 border border-gray-100 p-5"
              >
                <div className="mx-auto h-24 w-24 rounded-full bg-gray-200" />
                <div className="mt-4 h-4 w-2/3 mx-auto bg-gray-200 rounded" />
                <div className="mt-2 h-3 w-4/5 mx-auto bg-gray-200 rounded" />
                <div className="mt-4 h-9 w-24 mx-auto bg-gray-200 rounded-lg" />
              </div>
            ))}
          </div>
        )}

        {/* Sentinel for IntersectionObserver */}
        <div ref={sentinelRef} className="h-10" />

        {/* End message + manual button (accessibility) */}
        <div className="mt-6 text-center">
          {!hasMore ? (
            <p className="text-gray-500">You’ve reached the end 🎉</p>
          ) : (
            <button
              onClick={fetchMore}
              disabled={loading}
              className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium bg-emerald-600 text-white hover:bg-emerald-700 disabled:opacity-50 transition"
            >
              {loading ? "Loading…" : "Load more"}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
