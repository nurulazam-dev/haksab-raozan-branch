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
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottom: "1pt solid #eee",
    paddingVertical: 2,
  },
  footer: {
    marginTop: 20,
    fontSize: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

const GSBDetailsPDF = ({ balance }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Image src={logo} style={{ width: 80, height: 80, margin: "0 auto" }} />
        <Text style={styles.title}>
          Hazrat Abul Khair Sultanpuri RH. Association Bangladesh
        </Text>
        <Text>(HASKAB) - Raozan Branch</Text>
        <Text>East Raozan, Rashidar Para, Joynagor, Chattogram.</Text>
        <Text>Email: info@haskab-raozan-branch.org</Text>
      </View>

      {/* Summary */}
      <View style={styles.section}>
        <Text style={{ fontSize: 14, fontWeight: "bold", marginBottom: 5 }}>
          Balance Summary
        </Text>
        <Text>Date: {balance.giyarbiSharifDate}</Text>
        <Text>Arabic Month: {balance.arabicMonth}</Text>
        <Text>Collector: {balance.balanceCollector}</Text>
        <Text>Total Income: {balance.totalIncome} /=</Text>
        <Text>Total Cost: {balance.totalCost} /=</Text>
        <Text>Available Balance: {balance.balance} /=</Text>
      </View>

      {/* Income */}
      <View style={styles.section}>
        <Text style={{ fontWeight: "bold", marginBottom: 4 }}>
          Income Entries
        </Text>
        {balance.incomeEntries.map((item, idx) => (
          <View style={styles.row} key={idx}>
            <Text>{item.donarName}</Text>
            <Text>{item.donationAmount}</Text>
          </View>
        ))}
      </View>

      {/* Cost */}
      <View style={styles.section}>
        <Text style={{ fontWeight: "bold", marginBottom: 4 }}>
          Cost Entries
        </Text>
        {balance.costEntries.map((item, idx) => (
          <View style={styles.row} key={idx}>
            <Text>{item.costName}</Text>
            <Text>{item.costAmount}</Text>
          </View>
        ))}
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text>Powered By @nurulazam</Text>
        <Text>
          Print on{" "}
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
