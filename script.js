document.addEventListener("DOMContentLoaded", () => {
  const dispData = document.getElementById("dataDisp");
  const reloadBtn = document.getElementById("reload-btn");

  async function findData() {
    try {
      const resopnse = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await resopnse.json();
      console.log(data);

      // clear old data before adding new
      dispData.innerHTML = "";

      data.map((p) => {
        const dataDisplaying = document.createElement("li");
        dataDisplaying.innerHTML = `<h2>Name : ${p.name}</h2>
            <h2>Email : ${p.email} </h2>
            <h2>Address : ${p.address.street}  , ${p.address.city} , ${p.address.zipcode} </h2>`;
        dispData.appendChild(dataDisplaying);
      });
    } catch (error) {
      console.log(error);
    }
  }

  findData();

  async function fetchingData() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json(); // FIX: added await
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  reloadBtn.addEventListener("click", async () => {
    const newData = await fetchingData();
    dispData.innerHTML = ""; // clear before appending again
    newData.map((p) => {
      const dataDisplaying = document.createElement("li");
      dataDisplaying.innerHTML = `<h2>Name : ${p.name}</h2>
          <h2>Email : ${p.email} </h2>
          <h2>Address : ${p.address.street}  , ${p.address.city} , ${p.address.zipcode} </h2>`;
      dispData.appendChild(dataDisplaying);
    });
  });
});
