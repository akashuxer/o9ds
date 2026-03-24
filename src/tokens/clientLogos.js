/**
 * Client logos in public/o9ClientLogos/light/ and public/o9ClientLogos/dark/
 * Each entry: { file: 'Company.svg', label: 'Company' }
 */
export const CLIENT_LOGOS = [
  'ABInBev.svg', 'AT&T.svg', 'Acuity Brands.svg', 'Adidas.svg', 'Aditya Birla Chemicals.svg',
  'Amazon.svg', 'Amorepacific.svg', 'Amway.svg', 'Anheuser-Busch InBev.svg', 'Apollo Tyres.svg',
  'Apple.svg', 'Arla.svg', 'Asahi Kasei Microdevices Corporation.svg', 'Asianpaints.svg', 'Avon.svg',
  'BCG.svg', 'BISSELL Homecare.svg', 'Barilla Group-1.svg', 'Barilla Group.svg', 'Berger.svg',
  'Big Lots.svg', 'Bimbo Bakeries.svg', 'Blue Buffalo.svg', 'Campbell Soup.svg', 'Canadian Tire.svg',
  'Canyon.svg', 'Cargill.svg', 'Cargotec.svg', 'Caterpillar.svg', 'Chivas Brothers.svg',
  'Chow Sang Sang.svg', 'Coca-Cola Bottlers Japan Inc..svg', 'Comcast.svg', 'Constellation Brands.svg',
  'CooperVision.svg', 'Coty.svg', 'Crocs.svg', 'DS Smith.svg', 'Danone.svg',
  'Deckers.svg', 'Diageo India.svg', 'Dish Network.svg', 'EMRO.svg', 'Eckes Granini.svg',
  'Efeso.svg', 'Envu.svg', 'Enza Zaden.svg', 'Estee Lauder.svg', 'ExxonMobil.svg',
  'Fanatics.svg', 'Fast Retailing.svg', 'Financiera Maderera S.A.svg', 'Five Below.svg', 'Fonterra.svg',
  'Fujitsu.svg', 'GE Vernova.svg', 'GMG.svg', 'Garrett Motion.svg', 'Gildan.svg',
  'Godfrey Phillips.svg', 'Godrej.svg', 'Gordon Food Service.svg', 'GrandVision.svg', 'Groupe SEB.svg',
  'Guitar Center.svg', 'HD Hyundai Infracore Co..svg', 'Haleon.svg', 'Helen of Troy.svg', 'Hewlett Packard.svg',
  'Hormel Foods.svg', 'Hugo Boss.svg', 'Indofil Industries Limited.svg', 'Indorama Ventures.svg', 'Intuitive Surgical.svg',
  'Iveco.svg', 'Johnsonville.svg', 'Kobayashi Pharmaceutical.svg', "Kohl's Corporation.svg", 'Koki Holdings.svg',
  'Kone.svg', 'Kraft Heinz.svg', 'Kubota.svg', 'Kyowa Kirin.svg', "L'Oreal.svg",
  'LT Foods.svg', 'Lego.svg', "Levi's.svg", 'Li Auto.svg', 'Liverpool.svg',
  'Lixil.svg', 'M&S.svg', 'M. Dias Branco.svg', 'MRF Limited.svg', 'Madura Garments.svg',
  'Mango.svg', 'Mankind Pharma.svg', 'Marelli.svg', 'Mark Anthony.svg', 'Marks&Spencer.svg',
  'Marubeni Corporation-1.svg', 'Marubeni Corporation.svg', 'Medline.svg', 'Mitsubishi Electric Corporation-1.svg', 'Mitsubishi Electric Corporation.svg',
  'Molson Coors Brewing.svg', 'Mondelez International.svg', 'Mosaic.svg', 'Navico.svg', 'New Balance.svg',
  'Nexperia.svg', 'Nike.svg', 'Novelis.svg', 'Ocean Spray Cranberries.svg', 'Olympus Corporation of the Americas.svg',
  'Pandora.svg', 'Paulig.svg', 'Pearson.svg', 'Pepsico.svg', 'Perfetti Van Melle.svg',
  'Philip Morris International.svg', 'Philips.svg', 'Pirelli.svg', 'Posco.svg', 'Prada.svg',
  'Premier Nutrition.svg', 'Prewave.svg', 'Pubtex.svg', 'QXO.svg', 'RHI Magnesita-1.svg',
  'RHI Magnesita.svg', 'Ralph Lauren.svg', 'ResMed.svg', 'Resideo.svg', 'Roland.svg',
  'Samsung Bioepis.svg', 'Samsung.svg', 'Scandinavian Tobacco.svg', 'Sephora.svg', 'Shurtape Technologies.svg',
  'Shurtape.svg', 'Siemens Gamesa Renewable Energy.svg', 'Skechers.svg', 'Smurfit WestRock.svg', 'Sony Global.svg',
  'Starbucks.svg', 'Summit Materials.svg', 'T-Mobile.svg', 'TB International.svg', 'TDK Corporation.svg',
  'TVS Motor.svg', 'Teleflex.svg', 'The Nisshin OilliO Group.svg', 'Total Wine and More.svg', 'Toyota.svg',
  'Tractor Supply Company.svg', 'Urban Outfitters.svg', 'Valeo.svg', 'Vestas.svg', 'Visionworks.svg',
  'Voestalpine.svg', 'W.L. Gore & Associates.svg', 'WSAudiology.svg', 'Walmart Canada.svg', 'Wayfair.svg',
  'Weyerhaeuser.svg', 'Wilbur-Ellis Company.svg', 'ZAMP.svg', 'reMarkable.svg',
].map((file) => ({
  file,
  label: file.replace(/\.svg$/i, ''),
}))

export const LOGOS_BASE_PATH_LIGHT = '/o9ClientLogos/light'
export const LOGOS_BASE_PATH_DARK = '/o9ClientLogos/dark'

/** @deprecated use LOGOS_BASE_PATH_LIGHT */
export const LOGOS_BASE_PATH = LOGOS_BASE_PATH_LIGHT
