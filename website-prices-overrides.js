const websitePackageLabels={ru:['ВИЗИТКА · 1 страница','БИЗНЕС · 5 страниц','СЛОЖНЫЙ · 8+ страниц'],et:['VISIITKAART · 1 leht','ÄRI · 5 lehte','KEERULINE · 8+ lehte'],en:['BUSINESS CARD · 1 page','BUSINESS · 5 pages','COMPLEX · 8+ pages']};
const websitePackagePrices=['300 €','550 €','1 000 €'];
function updateWebsitePackages(lang){document.querySelectorAll('.web-card h3').forEach((el,index)=>{el.textContent=websitePackageLabels[lang][index]});document.querySelectorAll('.web-card .price').forEach((el,index)=>{el.textContent=websitePackagePrices[index]})}
updateWebsitePackages(localStorage.getItem('arikorras-lang')||'ru');document.querySelectorAll('.lang').forEach(button=>button.addEventListener('click',()=>updateWebsitePackages(button.dataset.lang)));
