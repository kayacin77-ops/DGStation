const promos = [
  ["WELCOME BONUS 50%","Claim up to RM888","assets/promos/promo1.png"],
  ["DAILY BONUS 10%","Claim up to RM188","assets/promos/promo2.png"],
  ["MIDNIGHT BONUS 20%","Claim up to RM288","assets/promos/promo3.png"],
  ["REBATE BONUS 5%","Claim up to Unlimited","assets/promos/promo1.png"],
  ["TNG BONUS 15%","Claim up to RM288","assets/promos/promo2.png"],
  ["WEEKEND BONUS 30%","Claim up to RM388","assets/promos/promo3.png"],
  ["WELCOME BACK BONUS 50%","Claim up to RM588","assets/promos/promo1.png"]
];

document.getElementById("promos").innerHTML = promos.map((p,i)=>`
  <div class="promo">
    <img class="promo-icon" src="${p[2]}" alt="${p[0]}">
    <div><b>${p[0]}</b><small>${p[1]}</small></div>
    <button onclick="alert('Promotion demo')">CLAIM NOW</button>
  </div>`).join("");

document.querySelector('[data-wechat]').addEventListener('click', e => {
  e.preventDefault();
  alert('WeChat ID: ' + e.currentTarget.dataset.wechat);
});
