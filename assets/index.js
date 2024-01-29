import axios from "axios";
//import chart from 'chart.js'

let apiUrl = "https://covid-api.com/api/reports";

async function fetchData() {
  try {
    console.log("Carregando");
    const response = await axios.get(apiUrl);
    console.log(response.data)
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
  }
}

function filter(paisQueQueroBuscar, dataDaBusca ) {
  apiUrl = apiUrl + `/total?iso=${paisQueQueroBuscar}&date=${dataDaBusca}`;

  console.log(apiUrl);

  fetchData();
}

// Data 2020-04-16

filter("BRA", "2022-05-10");
