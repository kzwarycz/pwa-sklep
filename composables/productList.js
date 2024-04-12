export function useProductList() {
  const products = [
    {
      id: 1,
      productName: "Elegancka Letnia Sukienka",
      description: "Lekka i zwiewna sukienka, idealna na ciepłe letnie dni. Wykonana z przyjemnego w dotyku materiału, który zapewnia komfort noszenia. Sukienka posiada delikatny dekolt i swobodny krój, który podkreśli Twoją figurę. Dostępna w różnych rozmiarach i kolorach.",
      imageFileName: "suknia.webp",
      rating: 4,
      category: "Sukienki",
      price: "120 zł"
    },
    {
      id: 2,
      productName: "Sportowe wdzianko",
      description: "Wygodne sportowe wdzianko, które idealnie sprawdzi się podczas codziennej aktywności. Wykonane z wysokiej jakości materiału, który jest przewiewny i odprowadza wilgoć. Wdzianko posiada luźny krój, który zapewnia swobodę ruchów. Dostępne w różnych kolorach i wzorach.",
      imageFileName: "sport_outfit.webp",
      rating: 5,
      category: "Sport",
      price: "150 zł"
    },
    {
      id: 3,
      productName: "Klasyczny Biały Sweter",
      description: "Klasyczny biały sweter, który stanowi niezbędną bazę każdej garderoby. Wykonany z miękkiej dzianiny, która zapewnia ciepło i komfort noszenia. Sweter posiada okrągły dekolt i prosty krój, który pasuje do każdego typu sylwetki. Dostępny w różnych rozmiarach.",
      imageFileName: "sweter.webp",
      rating: 3,
      category: "Swetry",
      price: "50 zł"
    },
    {
      id: 4,
      productName: "Kurtka Denimowa Vintage",
      description: "Stylowa kurtka denimowa w stylu vintage, która doda charakteru Twojej stylizacji. Wykonana z wytrzymałego denimu, który jest odporny na przetarcia. Kurtka posiada klasyczny krój z guzikami i dwiema kieszeniami. Dostępna w różnych rozmiarach.",
      imageFileName: "kurtka.webp",
      rating: 4,
      category: "Kurtki",
      price: "160 zł"
    },
    {
      id: 5,
      productName: "Miękka Koszulka Bawełniana",
      description: "Miękka bawełniana koszulka, która idealnie sprawdzi się na co dzień. Wykonana z przyjemnego w dotyku materiału, który zapewnia komfort noszenia. Koszulka posiada prosty krój i okrągły dekolt. Dostępna w różnych kolorach i wzorach.",
      imageFileName: "tshirt.webp",
      rating: 5,
      category: "Koszulki",
      price: "110 zł"
    },
    {
      id: 6,
      productName: "Elegancki Garnitur Biznesowy",
      description: "Elegancki garnitur biznesowy, który podkreśli Twój profesjonalny wizerunek. Wykonany z wysokiej jakości materiału, który jest trwały i odporny na zagniecenia. Garnitur posiada klasyczny krój i taliowaną marynarkę. Dostępny w różnych rozmiarach i kolorach.",
      imageFileName: "garnitur.webp",
      rating: 4,
      category: "Garnitury",
      price: "100 zł"
    }
  ];

  return products;
}
