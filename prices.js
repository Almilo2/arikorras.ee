const footer = document.querySelector('.footer-bottom');
footer.querySelector('span').innerHTML = '© 2026 ÄRI KORRAS · ELBARES OÜ · registrikood 11188120 · Narva linn · <a href="mailto:info@arikorras.ee">info@arikorras.ee</a>';
const footerPrivacyLink = document.createElement('a');
footerPrivacyLink.href = 'privacy.html';
footerPrivacyLink.dataset.i18n = 'footerPrivacy';
footer.insertBefore(footerPrivacyLink, footer.querySelector('a'));

const priceText = {
  et: {
    documentTitle: 'Hinnakiri | ÄRI KORRAS', documentDescription: 'ÄRI KORRAS teenuste hinnakiri: raamatupidamine, nõustamine, personalidokumendid ja kodulehed.',
    navServices: 'Teenused', navAbout: 'Meist', navPrices: 'Hinnad', navContact: 'Kontakt',
    headerCta: 'Küsi pakkumist <span>↗</span>', heroLabel: 'ÄRI KORRAS HINNAKIRI',
    heroTitle: 'Selged hinnad,<br><em>kokkulepitud töö.</em>',
    heroText: 'Raamatupidamise kuutasu sõltub dokumentide arvust ja ettevõtte töökorraldusest. Paketi täpne sisu kinnitatakse pakkumises.',
    accountingHeading: 'Igakuine raamatupidamine', accountingIntro: 'Paketi täpne sisu kinnitatakse personaalses pakkumises.',
    startPrice: 'alates 50 € kuus', startItem1: 'Kuni 20 algdokumenti ja 1 pangakonto.',
    startItem2: 'Ostu- ja müügiarvete ning pangatehingute arvestus.', startItem3: 'Maksudeklaratsioonide koostamise ja palgaarvestuse saab paketile lisada lisatasu eest.',
    standardPrice: 'alates 120 € kuus', standardItem1: 'Kuni 50 algdokumenti.',
    standardItem2: 'Jooksev raamatupidamine ja vajalikud maksudeklaratsioonid.', standardItem3: 'Ühe töötaja palgaarvestus.',
    businessPrice: 'alates 200 € kuus', businessItem1: 'Kuni 100 algdokumenti.',
    businessItem2: 'Jooksev arvestus, maksudeklaratsioonid ja põhivara arvestus.', businessItem3: 'Kuni kolme töötaja palgaarvestus.',
    accountingNote: 'Üle 100 algdokumendi kuus: individuaalne pakkumine. Ostuarve, müügiarve või kviitung on üks algdokument; sellega seotud pangamakse ei lisandu dokumendilimiidile.',
    reportsHeading: 'Aruanded ja nõustamine', consultation: 'Raamatupidamis- või maksukonsultatsioon', consultationPrice: '40 €/tund',
    statistics: 'Statistikaaruanne', statisticsPrice: 'alates 25 €', inactiveReport: 'Tegevuseta ettevõtte majandusaasta aruanne', inactivePrice: 'alates 80 €',
    activeReport: 'Tegutseva ettevõtte majandusaasta aruanne', activePrice: 'alates 150 €', incompleteBooks: 'Puuduliku arvestuse korral', hourlyPrice: '40 €/tund',
    otherHeading: 'Muud teenused', personnel: 'Personalidokumendid', uponRequest: 'hind päringu alusel',
    accountingTakeover: 'Varasema arvestuse kontroll, parandamine ja taastamine ning raamatupidamise ülevõtmine', byAgreement: 'töö maht ja hind kokkuleppel',
    webHeading: 'Kodulehtede loomine', businessCard: 'Visiitkaardileht (1 leht)', businessCardPrice: 'alates 450 €',
    companySite: 'Ettevõtte koduleht (kuni 5 lehte)', companySitePrice: 'alates 900 €', complexSite: 'Keerukam veebileht või e-pood',
    individualOffer: 'individuaalne pakkumine', webNote: 'Domeen, majutus, tekstid, tõlked ja lisafunktsioonid lepitakse eraldi kokku.',
    vatNote: 'ELBARES OÜ ei ole käibemaksukohustuslane; nimetatud hindadele käibemaksu ei lisandu.',
    offerButton: 'Küsi personaalset pakkumist <span>↗</span>', homeButton: 'Avalehele <span>↗</span>', footerPrivacy: 'Privaatsustingimused <span>↗</span>'
  },
  ru: {
    documentTitle: 'Цены | ÄRI KORRAS', documentDescription: 'Цены ÄRI KORRAS: бухгалтерия, консультации, кадровые документы и создание сайтов.',
    navServices: 'Услуги', navAbout: 'О нас', navPrices: 'Цены', navContact: 'Контакты',
    headerCta: 'Получить предложение <span>↗</span>', heroLabel: 'ЦЕНЫ ÄRI KORRAS',
    heroTitle: 'Понятные цены,<br><em>согласованный объём.</em>',
    heroText: 'Ежемесячная стоимость бухгалтерского обслуживания зависит от объёма документов и особенностей работы компании. Точный состав пакета подтверждается в предложении.',
    accountingHeading: 'Ежемесячное бухгалтерское обслуживание', accountingIntro: 'Точный состав пакета подтверждается в индивидуальном предложении.',
    startPrice: 'от 50 € в месяц', startItem1: 'До 20 первичных документов и один банковский счёт.',
    startItem2: 'Учёт счетов покупки и продажи, банковских операций.', startItem3: 'Подготовка налоговых деклараций и расчёт заработной платы могут быть добавлены к пакету за дополнительную плату.',
    standardPrice: 'от 120 € в месяц', standardItem1: 'До 50 первичных документов.',
    standardItem2: 'Текущий учёт и необходимые налоговые декларации.', standardItem3: 'Расчёт зарплаты одного работника.',
    businessPrice: 'от 200 € в месяц', businessItem1: 'До 100 первичных документов.',
    businessItem2: 'Текущий учёт, налоговые декларации и учёт основных средств.', businessItem3: 'Расчёт зарплаты до трёх работников.',
    accountingNote: 'Более 100 первичных документов в месяц — индивидуальное предложение. Один счёт покупки, счёт продажи или чек считается одним документом; связанный банковский платёж повторно в лимит не включается.',
    reportsHeading: 'Отчёты и консультации', consultation: 'Бухгалтерская или налоговая консультация', consultationPrice: '40 €/час',
    statistics: 'Статистический отчёт', statisticsPrice: 'от 25 €', inactiveReport: 'Годовой отчёт предприятия без деятельности', inactivePrice: 'от 80 €',
    activeReport: 'Годовой отчёт действующего предприятия', activePrice: 'от 150 €', incompleteBooks: 'При неполном учёте', hourlyPrice: '40 €/час',
    otherHeading: 'Другие услуги', personnel: 'Кадровые документы', uponRequest: 'цена по запросу',
    accountingTakeover: 'Проверка, исправление и восстановление учёта за прошлые периоды, переход от прежнего бухгалтера', byAgreement: 'объём и цена по договорённости',
    webHeading: 'Создание сайтов', businessCard: 'Сайт-визитка (1 страница)', businessCardPrice: 'от 450 €',
    companySite: 'Сайт для бизнеса (до 5 страниц)', companySitePrice: 'от 900 €', complexSite: 'Сложный сайт или интернет-магазин',
    individualOffer: 'индивидуальное предложение', webNote: 'Домен, хостинг, тексты, переводы и дополнительные функции согласовываются отдельно.',
    vatNote: 'ELBARES OÜ не является плательщиком НДС; к указанным ценам НДС не добавляется.',
    offerButton: 'Получить индивидуальное предложение <span>↗</span>', homeButton: 'На главную <span>↗</span>', footerPrivacy: 'Политика конфиденциальности <span>↗</span>'
  },
  en: {
    documentTitle: 'Prices | ÄRI KORRAS', documentDescription: 'ÄRI KORRAS prices for accounting, advice, employment documents and website creation.',
    navServices: 'Services', navAbout: 'About us', navPrices: 'Prices', navContact: 'Contact',
    headerCta: 'Request a quote <span>↗</span>', heroLabel: 'ÄRI KORRAS PRICES',
    heroTitle: 'Clear prices,<br><em>agreed scope.</em>',
    heroText: 'The monthly accounting fee depends on the number of documents and how the company operates. The exact package scope is confirmed in the quote.',
    accountingHeading: 'Monthly accounting', accountingIntro: 'The exact package scope is confirmed in a personalised quote.',
    startPrice: 'from €50 per month', startItem1: 'Up to 20 source documents and 1 bank account.',
    startItem2: 'Recording purchase and sales invoices and bank transactions.', startItem3: 'Preparation of tax returns and payroll calculation can be added to the package for an additional fee.',
    standardPrice: 'from €120 per month', standardItem1: 'Up to 50 source documents.',
    standardItem2: 'Ongoing accounting and required tax returns.', standardItem3: 'Payroll for one employee.',
    businessPrice: 'from €200 per month', businessItem1: 'Up to 100 source documents.',
    businessItem2: 'Ongoing accounting, tax returns and fixed asset accounting.', businessItem3: 'Payroll for up to three employees.',
    accountingNote: 'More than 100 source documents per month: individual quote. Each purchase invoice, sales invoice or receipt counts as one source document; the related bank payment does not count toward the limit.',
    reportsHeading: 'Reports and advice', consultation: 'Accounting or tax consultation', consultationPrice: '€40/hour',
    statistics: 'Statistical report', statisticsPrice: 'from €25', inactiveReport: 'Annual report for an inactive company', inactivePrice: 'from €80',
    activeReport: 'Annual report for an operating company', activePrice: 'from €150', incompleteBooks: 'Work with incomplete records', hourlyPrice: '€40/hour',
    otherHeading: 'Other services', personnel: 'Employment documents', uponRequest: 'price on request',
    accountingTakeover: 'Review, correction or reconstruction of prior accounting periods, and taking over accounting', byAgreement: 'scope and price by agreement',
    webHeading: 'Website creation', businessCard: 'One-page website', businessCardPrice: 'from €450',
    companySite: 'Business website (up to 5 pages)', companySitePrice: 'from €900', complexSite: 'Complex website or online store',
    individualOffer: 'individual quote', webNote: 'Domain, hosting, copy, translations and additional features are agreed separately.',
    vatNote: 'ELBARES OÜ is not VAT registered; VAT is not added to the prices shown.',
    offerButton: 'Request a personalised quote <span>↗</span>', homeButton: 'Home <span>↗</span>', footerPrivacy: 'Privacy policy <span>↗</span>'
  }
};

function setPriceLanguage(language) {
  const text = priceText[language] || priceText.et;
  document.documentElement.lang = language;
  document.title = text.documentTitle;
  document.querySelector('meta[name="description"]').content = text.documentDescription;
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const value = text[element.dataset.i18n];
    if (value) element.innerHTML = value;
  });
  document.querySelectorAll('.lang').forEach((button) => {
    button.classList.toggle('active', button.dataset.lang === language);
  });
  localStorage.setItem('arikorras-lang-v2', language);
}

setPriceLanguage(localStorage.getItem('arikorras-lang-v2') || 'et');
document.querySelectorAll('.lang').forEach((button) => {
  button.addEventListener('click', () => setPriceLanguage(button.dataset.lang));
});
