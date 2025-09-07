/* --------------- Dados iniciais (exemplo) --------------- */
const members = [
  { name: "MTPlays", infamy: 12000, notes: "Líder • MVP" },
  { name: "Azazel", infamy: 9500, notes: "Traidor? hehe" },
  { name: "Yoru", infamy: 8700, notes: "DPS top" },
  { name: "Kira", infamy: 8200, notes: "Tank confiável" },
  { name: "Luna", infamy: 7800, notes: "Suporte" },
  { name: "NovoMembro", infamy: 500, notes: "Recem chegado" }
];

/* --------------- Rotator de mensagens do banner --------------- */
const rotMsgs = [
  "Boas-vindas: Junte-se ao nosso Discord!",
  "Sorteio semanal: fruta lendária",
  "Raid PvE sábado às 20:00",
  "Top players recompensados mensalmente"
];

const rotatorEl = document.querySelector('.rotator');
let rotIdx = 0;
function rotateMsg(){
  if(!rotatorEl) return;
  rotatorEl.style.opacity = 0;
  setTimeout(()=>{
    rotatorEl.textContent = rotMsgs[rotIdx % rotMsgs.length];
    rotatorEl.style.opacity = 1;
    rotIdx++;
  }, 250);
}
rotateMsg();
setInterval(rotateMsg, 4000);

/* --------------- Preencher leaderboard (ordenado) --------------- */
function populateLeaderboard(list){
  const tbody = document.getElementById('leaderboard-body');
  tbody.innerHTML = '';
  // Ordena por infamy desc
  const sorted = [...list].sort((a,b)=> b.infamy - a.infamy);
  sorted.forEach((m, i) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="pos">${i+1}</td>
      <td class="name">
        <span class="leader-name" title="${m.notes || ''}">${escapeHtml(m.name)}</span>
      </td>
      <td class="infamy">${m.infamy.toLocaleString()}</td>
    `;
    // clique rápido abre tooltip-like (mobile)
    tr.addEventListener('click', ()=> {
      alert(`${m.name} — ${m.infamy.toLocaleString()} Infamy\n${m.notes || ''}`);
    });
    tbody.appendChild(tr);
  });
}
function escapeHtml(s){ return (s+'').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":"&#39;"}[c])); }
populateLeaderboard(members);

/* --------------- Interações dos botões --------------- */
document.getElementById('joinDiscord')?.addEventListener('click', ()=> {
  // substituir pelo link real do Discord
  window.open('https://discord.gg/seu-link-aqui', '_blank');
});
document.getElementById('verLeader')?.addEventListener('click', ()=> {
  document.getElementById('leaderboard').scrollIntoView({ behavior:'smooth' });
});

/* card buttons (evento) */
document.querySelectorAll('.card .btn').forEach(btn=>{
  btn.addEventListener('click', (e)=>{
    const action = e.currentTarget.dataset.action || '';
    if(action === 'sorteio') alert('Você entrou no sorteio (simulado).');
    else if(action === 'pve') alert('Você se inscreveu no PvE Especial (simulado).');
    else if(action === 'missao') alert('Missão iniciada (simulado).');
    else if(action === 'detalhes') alert('Veja mais detalhes no Discord.');
    else alert('Ação temporariamente simulada.');
  });
});

/* --------------- Opções: atualizar leaderboard via GitHub (simples) ---------------
  Observação: pra dinamizar via backend você precisaria de API.
  Aqui deixamos uma função helper que permite atualizar em runtime:
*/
window.updateMembers = function(newList){
  try{
    if(!Array.isArray(newList)) throw 'Lista inválida';
    populateLeaderboard(newList);
  }catch(e){ console.error(e); }
};

/* --------------- Lazy load images fallback --------------- */
document.addEventListener('DOMContentLoaded', ()=>{
  const hero = document.querySelector('.hero');
  // se banner.jpg não existir, aplica fundo escuro bonito (já no CSS tem gradiente)
  // já temos onerror no img logo
});

/* Fim do script */
