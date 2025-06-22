import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  greenHeader: {
    backgroundColor: "#5DB075",
    height: 250,
    paddingTop: 30,
    paddingHorizontal: 20,
    justifyContent: "flex-start",
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 1,
  },
  headerText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  avatar: {
    position: "absolute",
    width: 190,
    height: 190,
    borderRadius: 90,
    borderWidth: 4,
    borderColor: "#fff",
    top: 110,
    left: 98,
    zIndex: 10,
  },
  profileInfo: {
    width: 272,
    height: 63,
    alignSelf: "center",
    marginTop: 65,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  desc: {
    color: "#666",
    marginTop: 3,
  },
  tabs: {
    width: 343,
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 12,
  },
  list: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  photosContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  photo: {
    width: 150,
    height: 150,
    borderRadius: 8,
  },
});

export default styles;
