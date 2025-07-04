export default function handler(req, res) {
    res.status(200).json([
      { name: "Totebag HimaSI", price: "35000", img: "totebag.jpg" },
      { name: "Stiker Lucu", price: "10000", img: "stiker.jpg" },
      { name: "Notebook", price: "20000", img: "notebook.jpg" },
    ]);
  }
  