// Lista de membros e infamy
const members = [
  { name: "Heron", infamy: 12000 },
  { name: "Djplay34", infamy: 9500 },
  { name: "Dokka", infamy: 8700 },
  { name: "MTPlaysGes", infamy: 8200 },
  { name: "TESTES", infamy: 7800 }
];

const tbody = document.getElementById("leaderboard-body");

members.forEach((member, index) => {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${index + 1}</td>
    <td>${member.name}</td>
    <td>${member.infamy}</td>
  `;
  tbody.appendChild(tr);
});
