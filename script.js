// Lista de membros e infamy (exemplo)
const members = [
  { name: "MTPlays", infamy: 12000 },
  { name: "Azazel", infamy: 9500 },
  { name: "Yoru", infamy: 8700 },
  { name: "Kira", infamy: 8200 },
  { name: "Luna", infamy: 7800 }
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
