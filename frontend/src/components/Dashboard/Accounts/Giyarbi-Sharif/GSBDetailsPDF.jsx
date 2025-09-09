import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import logo from "../../../../assets/images/logo/abu_maola_rowja.png";

// Styles
const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontSize: 12,
    fontFamily: "Helvetica",
  },
  header: {
    textAlign: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  section: {
    marginBottom: 10,
    padding: 6,
    border: "1pt solid #ccc",
    borderRadius: 4,
  },
  summarySection: {
    marginBottom: 10,
    padding: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 4,
    fontSize: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottom: "1pt solid #eee",
    padding: 4,
  },
  footer: {
    marginTop: 4,
    fontSize: 8,
    color: "#45556c",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

const GSBDetailsPDF = ({ balance }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 10,
            marginBottom: 6,
            fontStyle: "italic",
          }}
        >
          Bismillahir Rahmanir Rahim
        </Text>
        <View style={{ position: "relative", marginBottom: 6 }}>
          <Image
            src={logo}
            style={{
              width: 60,
              height: 60,
              margin: "0 auto",
              objectFit: "contain",
            }}
          />
          {/* takbir part */}
          <View
            style={{
              position: "absolute",
              top: 0,
              left: 10,
              fontSize: 8,
              fontStyle: "italic",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              alignItems: "center",
            }}
          >
            {/* left side takbir */}
            <View style={{ textAlign: "start", lineHeight: 0.5 }}>
              <Text style={{ fontStyle: "italic", fontSize: 8 }}>
                Naraye Takbir
              </Text>

              <Text style={{ fontStyle: "italic", fontSize: 8 }}>
                Naraye Risalat
              </Text>
              <Text style={{ fontStyle: "italic", fontSize: 8 }}>
                Naraye Haydari
              </Text>
              <Text style={{ fontStyle: "italic", fontSize: 8 }}>
                Naraye Hasnayin
              </Text>
              <Text style={{ fontStyle: "italic", fontSize: 8 }}>
                Naraye Gaosiya
              </Text>
              <Text style={{ fontStyle: "italic", fontSize: 8 }}>
                Naraye Gaosiya
              </Text>
              <Text style={{ fontStyle: "italic", fontSize: 8 }}>
                Abu Maola Sultanpuri RH.
              </Text>
            </View>
            {/* right side takbir */}
            <View style={{ lineHeight: 0.5, textAlign: "end" }}>
              <Text
                style={{ fontStyle: "italic", fontSize: 8, textAlign: "right" }}
              >
                Allahu Akbar
              </Text>
              <Text
                style={{ fontStyle: "italic", fontSize: 8, textAlign: "right" }}
              >
                Yea Rasulullah S.A.W.
              </Text>
              <Text
                style={{ fontStyle: "italic", fontSize: 8, textAlign: "right" }}
              >
                Yea Ali Martuza A.S.
              </Text>
              <Text
                style={{ fontStyle: "italic", fontSize: 8, textAlign: "right" }}
              >
                Yea Hasan Yea Hossain A.S.
              </Text>
              <Text
                style={{ fontStyle: "italic", fontSize: 8, textAlign: "right" }}
              >
                Yea Gaosul Azam Dastagir RH.
              </Text>
              <Text
                style={{ fontStyle: "italic", fontSize: 8, textAlign: "right" }}
              >
                Gaosul Azam Maisvandary RH.
              </Text>
              <Text
                style={{ fontStyle: "italic", fontSize: 8, textAlign: "right" }}
              >
                Marhaba Marhaba
              </Text>
            </View>
          </View>
        </View>
        <Text style={styles.title}>
          Hazrat Abul Khair Sultanpuri RH. Association Bangladesh
        </Text>
        <Text style={styles.title}>(HASKAB) - Raozan Branch</Text>
        <Text style={{ textAlign: "center", fontSize: 8, marginBottom: 4 }}>
          East Raozan, Rashidar Para, Joynagor, Chattogram.
        </Text>
        <Text style={{ textAlign: "center", fontSize: 8, marginBottom: 3 }}>
          Email: info@haskab-raozan-branch.org
        </Text>
        <Text style={{ textAlign: "center", fontSize: 8 }}>
          Head Office: Satgachia Darbar Sharif, Mujibnagar, Haidgaon, Patia,
          Chattogram.
        </Text>
      </View>

      <Text
        style={{
          fontSize: 14,
          fontWeight: "bold",
          marginBottom: 5,
          textAlign: "center",
          backgroundColor: "#4CAF50",
          color: "white",
          padding: 4,
        }}
      >
        Balance Summary
      </Text>
      {/* Summary */}
      <View style={styles.summarySection}>
        <Text>
          <Text style={{ fontWeight: "bold" }}>Date: </Text>
          {balance.giyarbiSharifDate}
        </Text>
        <Text>
          <Text style={{ fontWeight: "bold" }}>Month: </Text>
          {balance.arabicMonth}
        </Text>
        <Text>
          <Text style={{ fontWeight: "bold" }}>Collector: </Text>
          {balance.balanceCollector}
        </Text>
        <Text>
          <Text style={{ fontWeight: "bold" }}>Income: </Text>
          {balance.totalIncome} /=
        </Text>
        <Text>
          <Text style={{ fontWeight: "bold" }}>Cost: </Text>
          {balance.totalCost} /=
        </Text>
        <Text>
          <Text style={{ fontWeight: "bold" }}>Balance: </Text>
          {balance.balance} /=
        </Text>
      </View>
      {/* income & Cost */}
      <View
        style={{ flexDirection: "row", gap: 10, fontSize: 9, width: "100%" }}
      >
        {/* Income */}
        <View style={{ width: "50%", border: "1pt solid #ccc" }}>
          <Text
            style={{
              fontWeight: "bold",
              marginBottom: 4,
              textAlign: "center",
              fontSize: 10,
              width: "100%",
              backgroundColor: "#f0f0f0",
              padding: 2,
            }}
          >
            Income Entries
          </Text>
          {balance.incomeEntries.map((item, idx) => (
            <View style={styles.row} key={idx}>
              <Text>{item.donarName}</Text>
              <Text>{item.donationAmount}</Text>
            </View>
          ))}
          <View style={styles.row}>
            <Text style={{ fontWeight: "bold" }}> Total Income: </Text>
            <Text style={{ fontWeight: "bold" }}>{balance.totalIncome}</Text>
          </View>
        </View>

        {/* Cost */}
        <View style={{ width: "50%", border: "1pt solid #ccc" }}>
          <Text
            style={{
              fontWeight: "bold",
              marginBottom: 4,
              textAlign: "center",
              fontSize: 10,
              width: "100%",
              backgroundColor: "#f0f0f0",
              padding: 2,
            }}
          >
            Cost Entries
          </Text>
          {balance.costEntries.map((item, idx) => (
            <View style={styles.row} key={idx}>
              <Text>{item.costName}</Text>
              <Text>{item.costAmount}</Text>
            </View>
          ))}
          <View style={styles.row}>
            <Text style={{ fontWeight: "bold" }}> Total Cost: </Text>
            <Text style={{ fontWeight: "bold" }}>{balance.totalCost}</Text>
          </View>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text>Powered By @nurulazam</Text>
        <Text>
          Print :{" "}
          {new Date()
            .toLocaleString("en-GB", {
              day: "2-digit",
              month: "2-digit",
              year: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
              hour12: true,
            })
            .replace(/\//g, "-")}
        </Text>
        <Text>Developed By @mnawebprogramming</Text>
      </View>
    </Page>
  </Document>
);

export default GSBDetailsPDF;
