/* ============================================================================
 * data.js — Ícones e diagramas educativos do Portal de Biologia
 * ----------------------------------------------------------------------------
 * Todos os gráficos são SVG desenhados à mão (sem imagens externas), o que
 * garante funcionamento 100% offline e dispensa questões de direitos autorais.
 * As classes CSS (.dg-*) são definidas em style.css e respeitam o tema claro
 * e escuro.
 * ==========================================================================*/

'use strict';

/* Ícones de linha usados nos cartões dos assuntos (24x24) */
const ICONES = {
  celula: `<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3.4"/><circle cx="6.4" cy="8" r="1"/><circle cx="18" cy="9" r="1"/><circle cx="8" cy="17" r="1"/><circle cx="16.6" cy="16.4" r="1"/>`,
  dna: `<path d="M7 2.8c0 4.6 10 5.4 10 9.2"/><path d="M17 2.8c0 4.6-10 5.4-10 9.2"/><path d="M7 21.2c0-4.6 10-5.4 10-9.2"/><path d="M8.4 7h7.2M5.8 12h12.4M8.4 17h7.2"/>`,
  ecologia: `<path d="M20.5 3.5C11 3.8 5 8 5 14.4c0 2.3 1 4.4 1 4.4s4.8-1.3 7.6-4.1c3-3 5.7-6.5 6.9-11.2z"/><path d="M5.6 20.5c1.9-4 4.6-7 8.4-9.4"/>`,
  evolucao: `<path d="M12 21v-8.5"/><path d="M12 13.5c-4 0-6.2-2.1-6.2-5.4 3.2 0 6.2 1.5 6.2 5.4z"/><path d="M12 13.5c4 0 6.2-2.1 6.2-5.4-3.2 0-6.2 1.5-6.2 5.4z"/><path d="M9.4 21h5.2"/>`,
  corpo: `<circle cx="12" cy="4.6" r="2.4"/><path d="M12 7.6v7.6"/><path d="M12 9.8 7.6 13M12 9.8l4.4 3.2"/><path d="M12 15.2 9 20.8M12 15.2l3 5.6"/>`,
  planta: `<path d="M12 21v-8.4"/><path d="M12 13.2C12 8.8 8.6 6.4 4.4 6.4c0 4.4 3.4 6.8 7.6 6.8z"/><path d="M12 13.2c0-4.4 3.4-6.8 7.6-6.8 0 4.4-3.4 6.8-7.6 6.8z"/><path d="M7 21h10"/>`,
  animais: `<path d="M3.2 12.4c3-4.2 7-6.2 10-6.2s6.6 2 7.8 6.2c-1.2 4.2-4.6 6.2-7.8 6.2s-7-2-10-6.2z"/><circle cx="7.6" cy="11" r="1"/><path d="M16.4 9.6 20.8 6v12l-4.4-3.6"/>`,
  microbio: `<rect x="3" y="9.6" width="18" height="6.4" rx="3.2"/><circle cx="8" cy="12.8" r="1"/><circle cx="15" cy="12.8" r="1"/><path d="M6.5 9.6V6.4M12 9.6V5M17.5 9.6V6.4"/><path d="M6.5 15.6v3M12 15.6v3.4M17.5 15.6v3"/>`,
  reproducao: `<circle cx="9.2" cy="12" r="6.2"/><circle cx="14.8" cy="12" r="6.2"/><circle cx="12" cy="12" r="1.5"/>`,
  ambiente: `<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c2.6 3.1 3.8 6 3.8 9s-1.2 5.9-3.8 9c-2.6-3.1-3.8-6-3.8-9S9.4 6.1 12 3z"/>`,
};

/* Pequenos selos/ícones de apoio usados em listas e detalhes */
const MINI_ICONES = {
  check: `<path d="M4 12.5 9 17.5 20 6.5"/>`,
  seta: `<path d="M5 12h14M13 6l6 6-6 6"/>`,
  lampada: `<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.6 10.8c.6.5.9 1.1 1 1.7h5.2c.1-.6.4-1.2 1-1.7A6 6 0 0 0 12 3z"/>`,
  livro: `<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H19v15H6.5A2.5 2.5 0 0 0 4 20.5z"/><path d="M4 18.5A2.5 2.5 0 0 1 6.5 16H19v5H6.5A2.5 2.5 0 0 1 4 18.5z"/>`,
  alerta: `<path d="M12 4 2.5 20h19z"/><path d="M12 10v4M12 17.2v.1"/>`,
  grafico: `<path d="M4 20h16"/><path d="M7 20v-6M12 20V7M17 20v-9"/>`,
};

/* ============================================================================
 * DIAGRAMAS — SVGs educativos (inline, viewBox responsivo)
 * ==========================================================================*/
const DIAGRAMAS = {
  /* celula */
  celula: `
  <svg class="diagrama-svg" viewBox="0 0 660 400" role="img" aria-labelledby="t-celula d-celula" xmlns="http://www.w3.org/2000/svg">
    <title id="t-celula">Comparação entre célula animal e célula vegetal</title>
    <desc id="d-celula">À esquerda, célula animal com núcleo, mitocôndrias, retículo endoplasmático, complexo de Golgi, ribossomos e membrana plasmática. À direita, célula vegetal com núcleo, vacúolo central, cloroplastos, parede celular, membrana plasmática e citoplasma. Os números indicam as partes.</desc>
    <rect class="dg-painel" x="8" y="8" width="318" height="384" rx="16"/>
    <rect class="dg-painel" x="334" y="8" width="318" height="384" rx="16"/>
    <text class="dg-titulo" x="167" y="36" text-anchor="middle">Célula animal</text>
    <text class="dg-titulo" x="493" y="36" text-anchor="middle">Célula vegetal</text>

    <ellipse class="dg-membrana" cx="167" cy="152" rx="99" ry="96"/>
    <ellipse class="dg-citoplasma" cx="167" cy="152" rx="93" ry="90"/>
    <circle class="dg-nucleo" cx="158" cy="142" r="38"/>
    <circle class="dg-nucleolo" cx="158" cy="142" r="12"/>
    <ellipse class="dg-mito" cx="225" cy="100" rx="19" ry="9" transform="rotate(22 225 100)"/>
    <ellipse class="dg-mito" cx="108" cy="212" rx="19" ry="9" transform="rotate(-16 108 212)"/>
    <ellipse class="dg-mito" cx="205" cy="205" rx="19" ry="9" transform="rotate(-30 205 205)"/>
    <path class="dg-re" d="M190 158c22 4 30 18 20 32-9 13-27 15-38 6"/>
    <path class="dg-re" d="M192 172c16 4 22 14 15 24"/>
    <path class="dg-golgi" d="M98 196c14-12 30-12 42 0"/>
    <path class="dg-golgi" d="M102 208c12-10 26-10 36 0"/>
    <path class="dg-golgi" d="M108 220c10-8 22-8 30 0"/>
    <g class="dg-ribossomos">
      <circle cx="76" cy="150" r="2.8"/><circle cx="92" cy="178" r="2.8"/><circle cx="120" cy="102" r="2.8"/>
      <circle cx="248" cy="152" r="2.8"/><circle cx="232" cy="182" r="2.8"/><circle cx="160" cy="72" r="2.8"/>
      <circle cx="132" cy="238" r="2.8"/><circle cx="186" cy="242" r="2.8"/>
    </g>
    <circle cx="128" cy="122" r="10" fill="#fff" stroke="var(--dia-texto)" stroke-width="2"/>
    <text class="dg-numero" x="128" y="126" text-anchor="middle">1</text>
    <circle cx="225" cy="100" r="10" fill="#fff" stroke="var(--dia-texto)" stroke-width="2"/>
    <text class="dg-numero" x="225" y="104" text-anchor="middle">2</text>
    <circle cx="200" cy="168" r="10" fill="#fff" stroke="var(--dia-texto)" stroke-width="2"/>
    <text class="dg-numero" x="200" y="172" text-anchor="middle">3</text>
    <circle cx="118" cy="205" r="10" fill="#fff" stroke="var(--dia-texto)" stroke-width="2"/>
    <text class="dg-numero" x="118" y="209" text-anchor="middle">4</text>
    <circle cx="76" cy="150" r="10" fill="#fff" stroke="var(--dia-texto)" stroke-width="2"/>
    <text class="dg-numero" x="76" y="154" text-anchor="middle">5</text>
    <circle cx="167" cy="56" r="10" fill="#fff" stroke="var(--dia-texto)" stroke-width="2"/>
    <text class="dg-numero" x="167" y="60" text-anchor="middle">6</text>

    <rect class="dg-parede" x="360" y="60" width="264" height="184" rx="12"/>
    <rect class="dg-membrana" x="367" y="67" width="250" height="170" rx="8"/>
    <rect class="dg-vacuolo" x="420" y="104" width="142" height="122" rx="10"/>
    <circle class="dg-nucleo" cx="398" cy="88" r="26"/>
    <circle class="dg-nucleolo" cx="398" cy="88" r="9"/>
    <ellipse class="dg-cloroplasto" cx="472" cy="82" rx="21" ry="11" transform="rotate(-12 472 82)"/>
    <ellipse class="dg-cloroplasto" cx="530" cy="82" rx="21" ry="11" transform="rotate(-12 530 82)"/>
    <ellipse class="dg-cloroplasto" cx="588" cy="82" rx="21" ry="11" transform="rotate(-12 588 82)"/>
    <ellipse class="dg-cloroplasto" cx="472" cy="228" rx="21" ry="11" transform="rotate(-12 472 228)"/>
    <ellipse class="dg-cloroplasto" cx="560" cy="228" rx="21" ry="11" transform="rotate(-12 560 228)"/>
    <g class="dg-ribossomos">
      <circle cx="386" cy="126" r="2.8"/><circle cx="380" cy="160" r="2.8"/><circle cx="606" cy="150" r="2.8"/>
    </g>
    <circle cx="380" cy="70" r="10" fill="#fff" stroke="var(--dia-texto)" stroke-width="2"/>
    <text class="dg-numero" x="380" y="74" text-anchor="middle">1</text>
    <circle cx="490" cy="165" r="10" fill="#fff" stroke="var(--dia-texto)" stroke-width="2"/>
    <text class="dg-numero" x="490" y="169" text-anchor="middle">2</text>
    <circle cx="530" cy="80" r="10" fill="#fff" stroke="var(--dia-texto)" stroke-width="2"/>
    <text class="dg-numero" x="530" y="84" text-anchor="middle">3</text>
    <circle cx="360" cy="150" r="10" fill="#fff" stroke="var(--dia-texto)" stroke-width="2"/>
    <text class="dg-numero" x="360" y="154" text-anchor="middle">4</text>
    <circle cx="613" cy="150" r="10" fill="#fff" stroke="var(--dia-texto)" stroke-width="2"/>
    <text class="dg-numero" x="613" y="154" text-anchor="middle">5</text>
    <circle cx="390" cy="190" r="10" fill="#fff" stroke="var(--dia-texto)" stroke-width="2"/>
    <text class="dg-numero" x="390" y="194" text-anchor="middle">6</text>

    <line class="dg-separador" x1="167" y1="256" x2="167" y2="268"/>
    <line class="dg-separador" x1="493" y1="256" x2="493" y2="268"/>
    
      <circle cx="39" cy="282" r="9" fill="#fff" stroke="var(--dia-texto)" stroke-width="1.6"/>
      <text class="dg-numero" x="39" y="286" text-anchor="middle">1</text>
      <text class="dg-texto-pequeno" x="56" y="286">Núcleo e nucléolo</text>
      <circle cx="39" cy="303" r="9" fill="#fff" stroke="var(--dia-texto)" stroke-width="1.6"/>
      <text class="dg-numero" x="39" y="307" text-anchor="middle">2</text>
      <text class="dg-texto-pequeno" x="56" y="307">Mitocôndria</text>
      <circle cx="39" cy="324" r="9" fill="#fff" stroke="var(--dia-texto)" stroke-width="1.6"/>
      <text class="dg-numero" x="39" y="328" text-anchor="middle">3</text>
      <text class="dg-texto-pequeno" x="56" y="328">Retículo endoplasmático</text>
      <circle cx="39" cy="345" r="9" fill="#fff" stroke="var(--dia-texto)" stroke-width="1.6"/>
      <text class="dg-numero" x="39" y="349" text-anchor="middle">4</text>
      <text class="dg-texto-pequeno" x="56" y="349">Complexo de Golgi</text>
      <circle cx="39" cy="366" r="9" fill="#fff" stroke="var(--dia-texto)" stroke-width="1.6"/>
      <text class="dg-numero" x="39" y="370" text-anchor="middle">5</text>
      <text class="dg-texto-pequeno" x="56" y="370">Ribossomos</text>
      <circle cx="39" cy="387" r="9" fill="#fff" stroke="var(--dia-texto)" stroke-width="1.6"/>
      <text class="dg-numero" x="39" y="391" text-anchor="middle">6</text>
      <text class="dg-texto-pequeno" x="56" y="391">Membrana plasmática</text>
    
      <circle cx="365" cy="282" r="9" fill="#fff" stroke="var(--dia-texto)" stroke-width="1.6"/>
      <text class="dg-numero" x="365" y="286" text-anchor="middle">1</text>
      <text class="dg-texto-pequeno" x="382" y="286">Núcleo</text>
      <circle cx="365" cy="303" r="9" fill="#fff" stroke="var(--dia-texto)" stroke-width="1.6"/>
      <text class="dg-numero" x="365" y="307" text-anchor="middle">2</text>
      <text class="dg-texto-pequeno" x="382" y="307">Vacúolo central</text>
      <circle cx="365" cy="324" r="9" fill="#fff" stroke="var(--dia-texto)" stroke-width="1.6"/>
      <text class="dg-numero" x="365" y="328" text-anchor="middle">3</text>
      <text class="dg-texto-pequeno" x="382" y="328">Cloroplasto</text>
      <circle cx="365" cy="345" r="9" fill="#fff" stroke="var(--dia-texto)" stroke-width="1.6"/>
      <text class="dg-numero" x="365" y="349" text-anchor="middle">4</text>
      <text class="dg-texto-pequeno" x="382" y="349">Parede celular</text>
      <circle cx="365" cy="366" r="9" fill="#fff" stroke="var(--dia-texto)" stroke-width="1.6"/>
      <text class="dg-numero" x="365" y="370" text-anchor="middle">5</text>
      <text class="dg-texto-pequeno" x="382" y="370">Membrana plasmática</text>
      <circle cx="365" cy="387" r="9" fill="#fff" stroke="var(--dia-texto)" stroke-width="1.6"/>
      <text class="dg-numero" x="365" y="391" text-anchor="middle">6</text>
      <text class="dg-texto-pequeno" x="382" y="391">Citoplasma</text>
  </svg>`,
  /* dna */
  dna: `
  <svg class="diagrama-svg" viewBox="0 0 660 400" role="img" aria-labelledby="t-dna d-dna" xmlns="http://www.w3.org/2000/svg">
    <title id="t-dna">Estrutura do DNA e complementaridade das bases</title>
    <desc id="d-dna">Dupla hélice com duas fitas de açúcar-fosfato e bases nitrogenadas pareadas por ligações de hidrogênio. Adenina pareia com timina por duas ligações e guanina com citosina por três.</desc>
    <rect class="dg-painel" x="8" y="8" width="644" height="384" rx="16"/>
    <text class="dg-titulo" x="330" y="36" text-anchor="middle">Dupla hélice do DNA e pareamento das bases</text>

    <path class="dg-fita" d="M 168 343 C 168.6 342.7, 170.3 341.7, 171.4 341 C 172.5 340.4, 173.7 339.7, 174.8 339.1 C 175.9 338.4, 177.1 337.7, 178.2 337.1 C 179.3 336.4, 180.5 335.8, 181.6 335.1 C 182.7 334.5, 183.8 333.8, 184.9 333.1 C 186 332.5, 187.1 331.8, 188.2 331.2 C 189.3 330.5, 190.4 329.9, 191.5 329.2 C 192.6 328.5, 193.6 327.9, 194.7 327.2 C 195.8 326.6, 196.8 325.9, 197.9 325.3 C 198.9 324.6, 200 323.9, 201 323.3 C 202 322.6, 203 322, 204 321.3 C 205 320.7, 206 320, 207 319.3 C 208 318.7, 208.9 318, 209.9 317.4 C 210.8 316.7, 211.8 316.1, 212.7 315.4 C 213.6 314.7, 214.5 314.1, 215.4 313.4 C 216.3 312.8, 217.1 312.1, 218 311.5 C 218.9 310.8, 219.7 310.1, 220.5 309.5 C 221.3 308.8, 222.1 308.2, 222.9 307.5 C 223.7 306.9, 224.5 306.2, 225.2 305.5 C 226 304.9, 226.7 304.2, 227.4 303.6 C 228.1 302.9, 228.8 302.3, 229.5 301.6 C 230.2 300.9, 230.8 300.3, 231.4 299.6 C 232.1 299, 232.7 298.3, 233.2 297.7 C 233.8 297, 234.4 296.3, 234.9 295.7 C 235.5 295, 236 294.4, 236.5 293.7 C 237 293.1, 237.4 292.4, 237.9 291.7 C 238.3 291.1, 238.8 290.4, 239.2 289.8 C 239.6 289.1, 239.9 288.5, 240.3 287.8 C 240.6 287.1, 241 286.5, 241.3 285.8 C 241.6 285.2, 241.8 284.5, 242.1 283.9 C 242.3 283.2, 242.6 282.5, 242.8 281.9 C 243 281.2, 243.2 280.6, 243.3 279.9 C 243.5 279.3, 243.6 278.6, 243.7 277.9 C 243.8 277.3, 243.9 276.6, 243.9 276 C 244 275.3, 244 274.7, 244 274 C 244 273.3, 244 272.7, 243.9 272 C 243.9 271.4, 243.8 270.7, 243.7 270.1 C 243.6 269.4, 243.5 268.7, 243.3 268.1 C 243.2 267.4, 243 266.8, 242.8 266.1 C 242.6 265.5, 242.3 264.8, 242.1 264.1 C 241.8 263.5, 241.6 262.8, 241.3 262.2 C 241 261.5, 240.6 260.9, 240.3 260.2 C 239.9 259.5, 239.6 258.9, 239.2 258.2 C 238.8 257.6, 238.3 256.9, 237.9 256.3 C 237.4 255.6, 237 254.9, 236.5 254.3 C 236 253.6, 235.5 253, 234.9 252.3 C 234.4 251.7, 233.8 251, 233.2 250.3 C 232.7 249.7, 232.1 249, 231.4 248.4 C 230.8 247.7, 230.2 247.1, 229.5 246.4 C 228.8 245.7, 228.1 245.1, 227.4 244.4 C 226.7 243.8, 226 243.1, 225.2 242.5 C 224.5 241.8, 223.7 241.1, 222.9 240.5 C 222.1 239.8, 221.3 239.2, 220.5 238.5 C 219.7 237.9, 218.9 237.2, 218 236.5 C 217.1 235.9, 216.3 235.2, 215.4 234.6 C 214.5 233.9, 213.6 233.3, 212.7 232.6 C 211.8 231.9, 210.8 231.3, 209.9 230.6 C 208.9 230, 208 229.3, 207 228.7 C 206 228, 205 227.3, 204 226.7 C 203 226, 202 225.4, 201 224.7 C 200 224.1, 198.9 223.4, 197.9 222.7 C 196.8 222.1, 195.8 221.4, 194.7 220.8 C 193.6 220.1, 192.6 219.5, 191.5 218.8 C 190.4 218.1, 189.3 217.5, 188.2 216.8 C 187.1 216.2, 186 215.5, 184.9 214.9 C 183.8 214.2, 182.7 213.5, 181.6 212.9 C 180.5 212.2, 179.3 211.6, 178.2 210.9 C 177.1 210.3, 175.9 209.6, 174.8 208.9 C 173.7 208.3, 172.5 207.6, 171.4 207 C 170.3 206.3, 169.1 205.7, 168 205 C 166.9 204.3, 165.7 203.7, 164.6 203 C 163.5 202.4, 162.3 201.7, 161.2 201.1 C 160.1 200.4, 158.9 199.7, 157.8 199.1 C 156.7 198.4, 155.5 197.8, 154.4 197.1 C 153.3 196.5, 152.2 195.8, 151.1 195.1 C 150 194.5, 148.9 193.8, 147.8 193.2 C 146.7 192.5, 145.6 191.9, 144.5 191.2 C 143.4 190.5, 142.4 189.9, 141.3 189.2 C 140.2 188.6, 139.2 187.9, 138.1 187.3 C 137.1 186.6, 136 185.9, 135 185.3 C 134 184.6, 133 184, 132 183.3 C 131 182.7, 130 182, 129 181.3 C 128 180.7, 127.1 180, 126.1 179.4 C 125.2 178.7, 124.2 178.1, 123.3 177.4 C 122.4 176.7, 121.5 176.1, 120.6 175.4 C 119.7 174.8, 118.9 174.1, 118 173.5 C 117.1 172.8, 116.3 172.1, 115.5 171.5 C 114.7 170.8, 113.9 170.2, 113.1 169.5 C 112.3 168.9, 111.5 168.2, 110.8 167.5 C 110 166.9, 109.3 166.2, 108.6 165.6 C 107.9 164.9, 107.2 164.3, 106.5 163.6 C 105.8 162.9, 105.2 162.3, 104.6 161.6 C 103.9 161, 103.3 160.3, 102.8 159.7 C 102.2 159, 101.6 158.3, 101.1 157.7 C 100.5 157, 100 156.4, 99.5 155.7 C 99 155.1, 98.6 154.4, 98.1 153.7 C 97.7 153.1, 97.2 152.4, 96.8 151.8 C 96.4 151.1, 96.1 150.5, 95.7 149.8 C 95.4 149.1, 95 148.5, 94.7 147.8 C 94.4 147.2, 94.2 146.5, 93.9 145.9 C 93.7 145.2, 93.4 144.5, 93.2 143.9 C 93 143.2, 92.8 142.6, 92.7 141.9 C 92.5 141.3, 92.4 140.6, 92.3 139.9 C 92.2 139.3, 92.1 138.6, 92.1 138 C 92 137.3, 92 136.7, 92 136 C 92 135.3, 92 134.7, 92.1 134 C 92.1 133.4, 92.2 132.7, 92.3 132.1 C 92.4 131.4, 92.5 130.7, 92.7 130.1 C 92.8 129.4, 93 128.8, 93.2 128.1 C 93.4 127.5, 93.7 126.8, 93.9 126.1 C 94.2 125.5, 94.4 124.8, 94.7 124.2 C 95 123.5, 95.4 122.9, 95.7 122.2 C 96.1 121.5, 96.4 120.9, 96.8 120.2 C 97.2 119.6, 97.7 118.9, 98.1 118.3 C 98.6 117.6, 99 116.9, 99.5 116.3 C 100 115.6, 100.5 115, 101.1 114.3 C 101.6 113.7, 102.2 113, 102.8 112.3 C 103.3 111.7, 103.9 111, 104.6 110.4 C 105.2 109.7, 105.8 109.1, 106.5 108.4 C 107.2 107.7, 107.9 107.1, 108.6 106.4 C 109.3 105.8, 110 105.1, 110.8 104.5 C 111.5 103.8, 112.3 103.1, 113.1 102.5 C 113.9 101.8, 114.7 101.2, 115.5 100.5 C 116.3 99.9, 117.1 99.2, 118 98.5 C 118.9 97.9, 119.7 97.2, 120.6 96.6 C 121.5 95.9, 122.4 95.3, 123.3 94.6 C 124.2 93.9, 125.2 93.3, 126.1 92.6 C 127.1 92, 128 91.3, 129 90.7 C 130 90, 131 89.3, 132 88.7 C 133 88, 134 87.4, 135 86.7 C 136 86.1, 137.1 85.4, 138.1 84.7 C 139.2 84.1, 140.2 83.4, 141.3 82.8 C 142.4 82.1, 143.4 81.5, 144.5 80.8 C 145.6 80.1, 146.7 79.5, 147.8 78.8 C 148.9 78.2, 150 77.5, 151.1 76.9 C 152.2 76.2, 153.3 75.5, 154.4 74.9 C 155.5 74.2, 156.7 73.6, 157.8 72.9 C 158.9 72.3, 160.1 71.6, 161.2 70.9 C 162.3 70.3, 163.5 69.6, 164.6 69 C 165.7 68.3, 167.4 67.3, 168 67"/>
    <path class="dg-fita" d="M 168 343 C 167.4 342.7, 165.7 341.7, 164.6 341 C 163.5 340.4, 162.3 339.7, 161.2 339.1 C 160.1 338.4, 158.9 337.7, 157.8 337.1 C 156.7 336.4, 155.5 335.8, 154.4 335.1 C 153.3 334.5, 152.2 333.8, 151.1 333.1 C 150 332.5, 148.9 331.8, 147.8 331.2 C 146.7 330.5, 145.6 329.9, 144.5 329.2 C 143.4 328.5, 142.4 327.9, 141.3 327.2 C 140.2 326.6, 139.2 325.9, 138.1 325.3 C 137.1 324.6, 136 323.9, 135 323.3 C 134 322.6, 133 322, 132 321.3 C 131 320.7, 130 320, 129 319.3 C 128 318.7, 127.1 318, 126.1 317.4 C 125.2 316.7, 124.2 316.1, 123.3 315.4 C 122.4 314.7, 121.5 314.1, 120.6 313.4 C 119.7 312.8, 118.9 312.1, 118 311.5 C 117.1 310.8, 116.3 310.1, 115.5 309.5 C 114.7 308.8, 113.9 308.2, 113.1 307.5 C 112.3 306.9, 111.5 306.2, 110.8 305.5 C 110 304.9, 109.3 304.2, 108.6 303.6 C 107.9 302.9, 107.2 302.3, 106.5 301.6 C 105.8 300.9, 105.2 300.3, 104.6 299.6 C 103.9 299, 103.3 298.3, 102.8 297.7 C 102.2 297, 101.6 296.3, 101.1 295.7 C 100.5 295, 100 294.4, 99.5 293.7 C 99 293.1, 98.6 292.4, 98.1 291.7 C 97.7 291.1, 97.2 290.4, 96.8 289.8 C 96.4 289.1, 96.1 288.5, 95.7 287.8 C 95.4 287.1, 95 286.5, 94.7 285.8 C 94.4 285.2, 94.2 284.5, 93.9 283.9 C 93.7 283.2, 93.4 282.5, 93.2 281.9 C 93 281.2, 92.8 280.6, 92.7 279.9 C 92.5 279.3, 92.4 278.6, 92.3 277.9 C 92.2 277.3, 92.1 276.6, 92.1 276 C 92 275.3, 92 274.7, 92 274 C 92 273.3, 92 272.7, 92.1 272 C 92.1 271.4, 92.2 270.7, 92.3 270.1 C 92.4 269.4, 92.5 268.7, 92.7 268.1 C 92.8 267.4, 93 266.8, 93.2 266.1 C 93.4 265.5, 93.7 264.8, 93.9 264.1 C 94.2 263.5, 94.4 262.8, 94.7 262.2 C 95 261.5, 95.4 260.9, 95.7 260.2 C 96.1 259.5, 96.4 258.9, 96.8 258.2 C 97.2 257.6, 97.7 256.9, 98.1 256.3 C 98.6 255.6, 99 254.9, 99.5 254.3 C 100 253.6, 100.5 253, 101.1 252.3 C 101.6 251.7, 102.2 251, 102.8 250.3 C 103.3 249.7, 103.9 249, 104.6 248.4 C 105.2 247.7, 105.8 247.1, 106.5 246.4 C 107.2 245.7, 107.9 245.1, 108.6 244.4 C 109.3 243.8, 110 243.1, 110.8 242.5 C 111.5 241.8, 112.3 241.1, 113.1 240.5 C 113.9 239.8, 114.7 239.2, 115.5 238.5 C 116.3 237.9, 117.1 237.2, 118 236.5 C 118.9 235.9, 119.7 235.2, 120.6 234.6 C 121.5 233.9, 122.4 233.3, 123.3 232.6 C 124.2 231.9, 125.2 231.3, 126.1 230.6 C 127.1 230, 128 229.3, 129 228.7 C 130 228, 131 227.3, 132 226.7 C 133 226, 134 225.4, 135 224.7 C 136 224.1, 137.1 223.4, 138.1 222.7 C 139.2 222.1, 140.2 221.4, 141.3 220.8 C 142.4 220.1, 143.4 219.5, 144.5 218.8 C 145.6 218.1, 146.7 217.5, 147.8 216.8 C 148.9 216.2, 150 215.5, 151.1 214.9 C 152.2 214.2, 153.3 213.5, 154.4 212.9 C 155.5 212.2, 156.7 211.6, 157.8 210.9 C 158.9 210.3, 160.1 209.6, 161.2 208.9 C 162.3 208.3, 163.5 207.6, 164.6 207 C 165.7 206.3, 166.9 205.7, 168 205 C 169.1 204.3, 170.3 203.7, 171.4 203 C 172.5 202.4, 173.7 201.7, 174.8 201.1 C 175.9 200.4, 177.1 199.7, 178.2 199.1 C 179.3 198.4, 180.5 197.8, 181.6 197.1 C 182.7 196.5, 183.8 195.8, 184.9 195.1 C 186 194.5, 187.1 193.8, 188.2 193.2 C 189.3 192.5, 190.4 191.9, 191.5 191.2 C 192.6 190.5, 193.6 189.9, 194.7 189.2 C 195.8 188.6, 196.8 187.9, 197.9 187.3 C 198.9 186.6, 200 185.9, 201 185.3 C 202 184.6, 203 184, 204 183.3 C 205 182.7, 206 182, 207 181.3 C 208 180.7, 208.9 180, 209.9 179.4 C 210.8 178.7, 211.8 178.1, 212.7 177.4 C 213.6 176.7, 214.5 176.1, 215.4 175.4 C 216.3 174.8, 217.1 174.1, 218 173.5 C 218.9 172.8, 219.7 172.1, 220.5 171.5 C 221.3 170.8, 222.1 170.2, 222.9 169.5 C 223.7 168.9, 224.5 168.2, 225.2 167.5 C 226 166.9, 226.7 166.2, 227.4 165.6 C 228.1 164.9, 228.8 164.3, 229.5 163.6 C 230.2 162.9, 230.8 162.3, 231.4 161.6 C 232.1 161, 232.7 160.3, 233.2 159.7 C 233.8 159, 234.4 158.3, 234.9 157.7 C 235.5 157, 236 156.4, 236.5 155.7 C 237 155.1, 237.4 154.4, 237.9 153.7 C 238.3 153.1, 238.8 152.4, 239.2 151.8 C 239.6 151.1, 239.9 150.5, 240.3 149.8 C 240.6 149.1, 241 148.5, 241.3 147.8 C 241.6 147.2, 241.8 146.5, 242.1 145.9 C 242.3 145.2, 242.6 144.5, 242.8 143.9 C 243 143.2, 243.2 142.6, 243.3 141.9 C 243.5 141.3, 243.6 140.6, 243.7 139.9 C 243.8 139.3, 243.9 138.6, 243.9 138 C 244 137.3, 244 136.7, 244 136 C 244 135.3, 244 134.7, 243.9 134 C 243.9 133.4, 243.8 132.7, 243.7 132.1 C 243.6 131.4, 243.5 130.7, 243.3 130.1 C 243.2 129.4, 243 128.8, 242.8 128.1 C 242.6 127.5, 242.3 126.8, 242.1 126.1 C 241.8 125.5, 241.6 124.8, 241.3 124.2 C 241 123.5, 240.6 122.9, 240.3 122.2 C 239.9 121.5, 239.6 120.9, 239.2 120.2 C 238.8 119.6, 238.3 118.9, 237.9 118.3 C 237.4 117.6, 237 116.9, 236.5 116.3 C 236 115.6, 235.5 115, 234.9 114.3 C 234.4 113.7, 233.8 113, 233.2 112.3 C 232.7 111.7, 232.1 111, 231.4 110.4 C 230.8 109.7, 230.2 109.1, 229.5 108.4 C 228.8 107.7, 228.1 107.1, 227.4 106.4 C 226.7 105.8, 226 105.1, 225.2 104.5 C 224.5 103.8, 223.7 103.1, 222.9 102.5 C 222.1 101.8, 221.3 101.2, 220.5 100.5 C 219.7 99.9, 218.9 99.2, 218 98.5 C 217.1 97.9, 216.3 97.2, 215.4 96.6 C 214.5 95.9, 213.6 95.3, 212.7 94.6 C 211.8 93.9, 210.8 93.3, 209.9 92.6 C 208.9 92, 208 91.3, 207 90.7 C 206 90, 205 89.3, 204 88.7 C 203 88, 202 87.4, 201 86.7 C 200 86.1, 198.9 85.4, 197.9 84.7 C 196.8 84.1, 195.8 83.4, 194.7 82.8 C 193.6 82.1, 192.6 81.5, 191.5 80.8 C 190.4 80.1, 189.3 79.5, 188.2 78.8 C 187.1 78.2, 186 77.5, 184.9 76.9 C 183.8 76.2, 182.7 75.5, 181.6 74.9 C 180.5 74.2, 179.3 73.6, 178.2 72.9 C 177.1 72.3, 175.9 71.6, 174.8 70.9 C 173.7 70.3, 172.5 69.6, 171.4 69 C 170.3 68.3, 168.6 67.3, 168 67"/>
    
      <rect class="dg-base-a" x="101.8" y="86" width="42" height="18" rx="6"/>
      <rect class="dg-base-t" x="192.2" y="86" width="42" height="18" rx="6"/>
      <line class="dg-hidrogenio" x1="144.8" y1="95" x2="191.2" y2="95" stroke-dasharray="4 4"/>
      <rect class="dg-base-g" x="71.7" y="121" width="42" height="18" rx="6"/>
      <rect class="dg-base-c" x="222.3" y="121" width="42" height="18" rx="6"/>
      <line class="dg-hidrogenio" x1="114.7" y1="130" x2="221.3" y2="130" stroke-dasharray="4 4"/>
      <rect class="dg-base-a" x="87" y="156" width="42" height="18" rx="6"/>
      <rect class="dg-base-t" x="207" y="156" width="42" height="18" rx="6"/>
      <line class="dg-hidrogenio" x1="130" y1="165" x2="206" y2="165" stroke-dasharray="4 4"/>
      <rect class="dg-base-a" x="207" y="236" width="42" height="18" rx="6"/>
      <rect class="dg-base-t" x="87" y="236" width="42" height="18" rx="6"/>
      <line class="dg-hidrogenio" x1="130" y1="245" x2="206" y2="245" stroke-dasharray="4 4"/>
      <rect class="dg-base-g" x="222.3" y="271" width="42" height="18" rx="6"/>
      <rect class="dg-base-c" x="71.7" y="271" width="42" height="18" rx="6"/>
      <line class="dg-hidrogenio" x1="114.7" y1="280" x2="221.3" y2="280" stroke-dasharray="4 4"/>
      <rect class="dg-base-a" x="192.2" y="306" width="42" height="18" rx="6"/>
      <rect class="dg-base-t" x="101.8" y="306" width="42" height="18" rx="6"/>
      <line class="dg-hidrogenio" x1="144.8" y1="315" x2="191.2" y2="315" stroke-dasharray="4 4"/>

    <path class="dg-chamada" d="M 240 95 L 286 66"/>
    <text class="dg-texto" x="292" y="70">Fita de açúcar-fosfato</text>

    <rect class="dg-legenda-caixa" x="300" y="88" width="330" height="126" rx="12"/>
    <rect class="dg-base-a" x="318" y="106" width="20" height="20" rx="5"/>
    <text class="dg-texto" x="350" y="121">Adenina (A)</text>
    <rect class="dg-base-t" x="318" y="136" width="20" height="20" rx="5"/>
    <text class="dg-texto" x="350" y="151">Timina (T)</text>
    <rect class="dg-base-g" x="318" y="166" width="20" height="20" rx="5"/>
    <text class="dg-texto" x="350" y="181">Guanina (G)</text>
    <rect class="dg-base-c" x="318" y="196" width="20" height="20" rx="5"/>
    <text class="dg-texto" x="350" y="211">Citosina (C)</text>

    <rect class="dg-nota" x="300" y="232" width="330" height="138" rx="12"/>
    <text class="dg-texto" x="318" y="258">A com T: 2 ligações de hidrogênio</text>
    <text class="dg-texto" x="318" y="284">G com C: 3 ligações de hidrogênio</text>
    <text class="dg-texto" x="318" y="310">Fitas antiparalelas: 5' → 3' e 3' → 5'</text>
    <text class="dg-texto" x="318" y="336">Complementaridade permite a cópia do DNA</text>
    <text class="dg-texto-pequeno" x="318" y="358">cada fita serve de molde para a outra</text>
  </svg>`,
  /* ecologia */
  ecologia: `
  <svg class="diagrama-svg" viewBox="0 0 660 400" role="img" aria-labelledby="t-eco d-eco" xmlns="http://www.w3.org/2000/svg">
    <title id="t-eco">Teia alimentar e ciclo de matéria em um ecossistema</title>
    <desc id="d-eco">Produtores são consumidos por herbívoros, que alimentam carnívoros. Decompositores devolvem matéria ao solo e o sol fornece a energia que entra no sistema.</desc>
    <rect class="dg-painel" x="8" y="8" width="644" height="384" rx="16"/>
    <text class="dg-titulo" x="330" y="36" text-anchor="middle">Teia alimentar de um ecossistema terrestre</text>

    <circle class="dg-sol" cx="606" cy="46" r="22"/>
    <g class="dg-raios"><line x1="606" y1="16" x2="606" y2="6"/><line x1="630" y1="26" x2="638" y2="18"/><line x1="582" y1="26" x2="574" y2="18"/><line x1="638" y1="46" x2="648" y2="46"/></g>
    <text class="dg-texto-pequeno" x="606" y="90" text-anchor="middle">Energia</text>

    <rect class="dg-nivel dg-n1" x="30" y="60" width="150" height="66" rx="12"/>
    <text class="dg-texto" x="105" y="88" text-anchor="middle">Produtores</text>
    <text class="dg-texto-pequeno" x="105" y="108" text-anchor="middle">plantas e algas</text>

    <rect class="dg-nivel dg-n2" x="230" y="60" width="150" height="66" rx="12"/>
    <text class="dg-texto" x="305" y="88" text-anchor="middle">Herbívoros</text>
    <text class="dg-texto-pequeno" x="305" y="108" text-anchor="middle">coelho, gafanhoto</text>

    <rect class="dg-nivel dg-n3" x="430" y="60" width="150" height="66" rx="12"/>
    <text class="dg-texto" x="505" y="88" text-anchor="middle">Carnívoros</text>
    <text class="dg-texto-pequeno" x="505" y="108" text-anchor="middle">raposa, gavião</text>

    <g class="dg-seta"><path d="M180 93 226 93"/><path d="M380 93 426 93"/></g>

    <rect class="dg-nivel dg-dec" x="30" y="186" width="270" height="66" rx="12"/>
    <text class="dg-texto" x="165" y="214" text-anchor="middle">Decompositores</text>
    <text class="dg-texto-pequeno" x="165" y="234" text-anchor="middle">bactérias e fungos</text>

    <rect class="dg-nivel dg-n4" x="430" y="186" width="150" height="66" rx="12"/>
    <text class="dg-texto" x="505" y="214" text-anchor="middle">Detritos e</text>
    <text class="dg-texto" x="505" y="234" text-anchor="middle">excreções</text>

    <g class="dg-seta"><path d="M305 126 305 168"/><path d="M505 126 505 182"/></g>
    <g class="dg-seta dg-seta-ciclo"><path d="M165 252 165 296"/></g>

    <rect class="dg-nivel dg-solo" x="30" y="296" width="550" height="62" rx="12"/>
    <text class="dg-texto" x="305" y="322" text-anchor="middle">Solo com matéria orgânica e minerais</text>
    <text class="dg-texto-pequeno" x="305" y="344" text-anchor="middle">os nutrientes voltam a ser usados pelas plantas</text>

    <g class="dg-seta dg-seta-ciclo"><path d="M596 327c40 0 44-58 4-70"/></g>
    <path class="dg-chamada" d="M600 257 596 257"/>
    <text class="dg-texto-pequeno" x="330" y="382" text-anchor="middle">A energia flui em uma direção; a matéria circula em ciclo</text>
  </svg>`,
  /* evolucao */
  evolucao: `
  <svg class="diagrama-svg" viewBox="0 0 660 400" role="img" aria-labelledby="t-evol d-evol" xmlns="http://www.w3.org/2000/svg">
    <title id="t-evol">Seleção natural e árvore filogenética</title>
    <desc id="d-evol">À esquerda, três indivíduos com variação de coloração: os menos numerosos são predados e os que sobrevivem se reproduzem. À direita, árvore filogenética com ramificação a partir de um ancestral comum.</desc>
    <rect class="dg-painel" x="8" y="8" width="318" height="384" rx="16"/>
    <rect class="dg-painel" x="334" y="8" width="318" height="384" rx="16"/>
    <text class="dg-titulo" x="167" y="36" text-anchor="middle">Seleção natural</text>
    <text class="dg-titulo" x="493" y="36" text-anchor="middle">Árvore filogenética</text>

    <g class="dg-mosca dg-clara">
      <ellipse class="dg-asa" cx="62" cy="78" rx="17" ry="7" transform="rotate(-28 62 78)"/>
      <ellipse class="dg-corpo" cx="70" cy="96" rx="21" ry="13"/>
      <circle class="dg-corpo" cx="93" cy="93" r="8"/>
      <g class="dg-pernas"><path d="M76 106 68 120M88 106 90 121M58 104 48 116"/></g>
      <path class="dg-antena" d="M99 88 112 80M101 92 116 90"/>
    </g>
    <text class="dg-texto" x="132" y="92">Sobrevivência</text>
    <text class="dg-texto-pequeno" x="132" y="110">e reprodução</text>

    <g class="dg-mosca dg-escura">
      <ellipse class="dg-asa" cx="62" cy="168" rx="17" ry="7" transform="rotate(-28 62 168)"/>
      <ellipse class="dg-corpo" cx="70" cy="186" rx="21" ry="13"/>
      <circle class="dg-corpo" cx="93" cy="183" r="8"/>
      <g class="dg-pernas"><path d="M76 196 68 210M88 196 90 211M58 194 48 206"/></g>
      <path class="dg-antena" d="M99 178 112 170M101 182 116 180"/>
    </g>
    <text class="dg-texto" x="132" y="182">Predação</text>
    <text class="dg-texto-pequeno" x="132" y="200">favorece os claros</text>

    <g class="dg-mosca dg-escura">
      <ellipse class="dg-asa" cx="62" cy="258" rx="17" ry="7" transform="rotate(-28 62 258)"/>
      <ellipse class="dg-corpo" cx="70" cy="276" rx="21" ry="13"/>
      <circle class="dg-corpo" cx="93" cy="273" r="8"/>
      <g class="dg-pernas"><path d="M76 286 68 300M88 286 90 301M58 284 48 296"/></g>
      <path class="dg-antena" d="M99 268 112 260M101 272 116 270"/>
    </g>
    <text class="dg-texto" x="132" y="272">Variação herdável</text>
    <text class="dg-texto-pequeno" x="132" y="290">entre os indivíduos</text>

    <rect class="dg-nota" x="28" y="318" width="278" height="58" rx="10"/>
    <text class="dg-texto-pequeno" x="44" y="342">O ambiente seleciona os caracteres</text>
    <text class="dg-texto-pequeno" x="44" y="360">que favorecem a sobrevivência.</text>

    <g class="dg-arvore">
      <path class="dg-tronco" d="M424 296 476 244 476 182 528 130"/>
      <path class="dg-tronco" d="M476 182 412 138"/>
      <path class="dg-tronco" d="M528 130 582 84"/>
      <path class="dg-tronco" d="M528 130 604 154"/>
      <path class="dg-tronco" d="M412 138 428 92"/>
      <path class="dg-tronco-grosso" d="M424 296 476 244"/>
    </g>
    <g class="dg-folha">
      <ellipse cx="432" cy="80" rx="22" ry="13"/>
      <ellipse cx="588" cy="74" rx="22" ry="13"/>
      <ellipse cx="610" cy="162" rx="22" ry="13"/>
      <ellipse cx="406" cy="130" rx="22" ry="13"/>
    </g>
    <text class="dg-texto-pequeno" x="356" y="326">ancestral</text>
    <text class="dg-texto-pequeno" x="356" y="344">comum</text>
    <path class="dg-chamada" d="M 424 296 L 402 318"/>
    <text class="dg-texto-pequeno" x="352" y="378" text-anchor="middle">cada ramo é uma linhagem</text>
  </svg>`,
  /* corpo */
  corpo: `
  <svg class="diagrama-svg" viewBox="0 0 660 400" role="img" aria-labelledby="t-corpo d-corpo" xmlns="http://www.w3.org/2000/svg">
    <title id="t-corpo">Principais sistemas do corpo humano</title>
    <desc id="d-corpo">Silhueta humana com destaque para os sistemas nervoso, cardiovascular, respiratório, digestório, excretor e locomotor.</desc>
    <rect class="dg-painel" x="8" y="8" width="644" height="384" rx="16"/>
    <text class="dg-titulo" x="330" y="36" text-anchor="middle">Os principais sistemas do organismo humano</text>

    <g class="dg-corpo">
      <circle class="dg-peca" cx="330" cy="84" r="30"/>
      <rect class="dg-peca" x="298" y="118" width="64" height="116" rx="26"/>
      <rect class="dg-peca" x="286" y="120" width="20" height="90" rx="10"/>
      <rect class="dg-peca" x="354" y="120" width="20" height="90" rx="10"/>
      <rect class="dg-peca" x="308" y="232" width="22" height="100" rx="10"/>
      <rect class="dg-peca" x="330" y="232" width="22" height="100" rx="10"/>
    </g>
    <g class="dg-destaque dg-nervoso"><path d="M330 54v196"/><circle cx="330" cy="72" r="10"/></g>
    <g class="dg-destaque dg-cardio"><path d="M330 148c-14-14-34-6-34 12 0 16 24 30 34 42 10-12 34-26 34-42 0-18-20-26-34-12z"/></g>
    <g class="dg-destaque dg-respiratorio"><path d="M306 124v28M354 124v28"/></g>
    <g class="dg-destaque dg-digestorio"><path d="M312 170h36v34h-36z"/></g>
    <g class="dg-destaque dg-excretor"><path d="M312 194v36h36v-36"/></g>
    <g class="dg-destaque dg-locomotor"><path d="M318 250v70M342 250v70"/></g>

    <text class="dg-texto" x="72" y="80">Sistema nervoso</text>
    <path class="dg-chamada" d="M 180 76 L 316 76"/>
    <text class="dg-texto" x="470" y="128">Cardiovascular</text>
    <path class="dg-chamada" d="M 466 124 L 372 160"/>
    <text class="dg-texto" x="470" y="176">Respiratório</text>
    <path class="dg-chamada" d="M 466 172 L 360 136"/>
    <text class="dg-texto" x="72" y="188">Digestório</text>
    <path class="dg-chamada" d="M 172 184 L 304 186"/>
    <text class="dg-texto" x="72" y="250">Excretor</text>
    <path class="dg-chamada" d="M 160 246 L 308 218"/>
    <text class="dg-texto" x="470" y="300">Locomotor</text>
    <path class="dg-chamada" d="M 466 296 L 358 288"/>
    <text class="dg-texto-pequeno" x="330" y="368" text-anchor="middle">Homeostase: o conjunto mantém o equilíbrio interno</text>
  </svg>`,
  /* planta */
  planta: `
  <svg class="diagrama-svg" viewBox="0 0 660 400" role="img" aria-labelledby="t-planta d-planta" xmlns="http://www.w3.org/2000/svg">
    <title id="t-planta">Estrutura da planta e fotossíntese</title>
    <desc id="d-planta">À esquerda, as partes da planta: raiz, caule, folha e flor. À direita, esquema da fotossíntese, com luz, água e dióxido de carbono formando glicose e oxigênio.</desc>
    <rect class="dg-painel" x="8" y="8" width="318" height="384" rx="16"/>
    <rect class="dg-painel" x="334" y="8" width="318" height="384" rx="16"/>
    <text class="dg-titulo" x="167" y="36" text-anchor="middle">Partes de uma planta</text>
    <text class="dg-titulo" x="493" y="36" text-anchor="middle">Fotossíntese</text>

    <g class="dg-planta">
      <path class="dg-talo" d="M140 300 140 160"/>
      <path class="dg-folha" d="M140 224c-38 2-58-16-62-40 28-4 54 10 62 40z"/>
      <path class="dg-folha" d="M140 258c38 2 58-16 62-40-28-4-54 10-62 40z"/>
      <path class="dg-raiz" d="M140 300c-26 8-34 22-40 38M140 300c26 8 34 22 40 38M140 300v38"/>
      <g class="dg-flor">
        <circle cx="140" cy="118" r="18"/>
        <circle cx="140" cy="94" r="13"/>
        <circle cx="160" cy="109" r="13"/>
        <circle cx="147" cy="130" r="13"/>
        <circle cx="120" cy="109" r="13"/>
        <circle cx="133" cy="130" r="13"/>
        <circle cx="140" cy="118" r="7"/>
      </g>
    </g>
    <text class="dg-texto" x="200" y="112">Flor</text>
    <path class="dg-chamada" d="M 196 108 L 162 114"/>
    <text class="dg-texto" x="200" y="204">Folha</text>
    <path class="dg-chamada" d="M 196 200 L 150 208"/>
    <text class="dg-texto" x="200" y="272">Caule</text>
    <path class="dg-chamada" d="M 196 268 L 148 272"/>
    <text class="dg-texto" x="200" y="336">Raiz</text>
    <path class="dg-chamada" d="M 196 332 L 148 312"/>

    <circle class="dg-sol" cx="404" cy="94" r="26"/>
    <text class="dg-texto-pequeno" x="404" y="140" text-anchor="middle">Luz solar</text>
    <rect class="dg-nivel dg-n2" x="374" y="158" width="120" height="44" rx="10"/>
    <text class="dg-texto" x="434" y="185" text-anchor="middle">Clorofila</text>
    <g class="dg-seta"><path d="M434 118 434 154"/></g>
    <g class="dg-seta"><path d="M392 204 392 236"/><path d="M476 204 476 236"/></g>
    <rect class="dg-nivel dg-n1" x="352" y="238" width="84" height="42" rx="10"/>
    <text class="dg-texto-pequeno" x="394" y="264" text-anchor="middle">Glicose</text>
    <rect class="dg-nivel dg-n3" x="444" y="238" width="84" height="42" rx="10"/>
    <text class="dg-texto-pequeno" x="486" y="264" text-anchor="middle">O₂</text>
    <rect class="dg-nivel dg-solo" x="352" y="296" width="196" height="42" rx="10"/>
    <text class="dg-texto-pequeno" x="450" y="322" text-anchor="middle">Água + CO₂</text>
    <g class="dg-seta"><path d="M430 294 404 282"/><path d="M470 294 478 282"/></g>
    <text class="dg-texto-pequeno" x="450" y="368" text-anchor="middle">A luz fornece a energia da reação</text>
  </svg>`,
  /* animais */
  animais: `
  <svg class="diagrama-svg" viewBox="0 0 660 400" role="img" aria-labelledby="t-ani d-ani" xmlns="http://www.w3.org/2000/svg">
    <title id="t-ani">Classificação dos animais</title>
    <desc id="d-ani">Árvore dos animais separando vertebrados de invertebrados e listando poríferos, cnidários, platelmintos, nematelmintos, anelidos, artrópodes, moluscos, equinodermos, peixes, anfíbios, répteis, aves e mamíferos.</desc>
    <rect class="dg-painel" x="8" y="8" width="644" height="384" rx="16"/>
    <text class="dg-titulo" x="330" y="36" text-anchor="middle">Classificação do reino Animalia</text>

    <g class="dg-arvore-linhas">
      <path d="M120 300 120 210"/>
      <path d="M120 255 250 255"/>
      <path d="M250 210 250 300"/>
      <path d="M250 255 380 255"/>
      <path d="M380 200 380 300"/>
      <path d="M380 255 500 255"/>
      <path d="M500 190 500 300"/>
      <path d="M120 210 120 130"/>
      <path d="M120 130 340 130"/>
    </g>
    <rect class="dg-no dg-verde" x="44" y="112" width="152" height="32" rx="9"/>
    <text class="dg-texto-branco" x="120" y="133" text-anchor="middle">Invertebrados</text>
    <rect class="dg-no dg-azul" x="264" y="114" width="152" height="32" rx="9"/>
    <text class="dg-texto-branco" x="340" y="135" text-anchor="middle">Vertebrados</text>

    <g class="dg-nos">
      <rect class="dg-no" x="14" y="196" width="130" height="30" rx="8"/><text class="dg-texto" x="79" y="216" text-anchor="middle">Poríferos</text>
      <rect class="dg-no" x="14" y="232" width="130" height="30" rx="8"/><text class="dg-texto" x="79" y="252" text-anchor="middle">Cnidários</text>
      <rect class="dg-no" x="14" y="268" width="130" height="30" rx="8"/><text class="dg-texto" x="79" y="288" text-anchor="middle">Platelmintos</text>
      <rect class="dg-no" x="14" y="304" width="130" height="30" rx="8"/><text class="dg-texto" x="79" y="324" text-anchor="middle">Nematelmintos</text>
      <rect class="dg-no" x="184" y="196" width="130" height="30" rx="8"/><text class="dg-texto" x="249" y="216" text-anchor="middle">Anelidos</text>
      <rect class="dg-no" x="184" y="232" width="130" height="30" rx="8"/><text class="dg-texto" x="249" y="252" text-anchor="middle">Artrópodes</text>
      <rect class="dg-no" x="184" y="268" width="130" height="30" rx="8"/><text class="dg-texto" x="249" y="288" text-anchor="middle">Moluscos</text>
      <rect class="dg-no" x="184" y="304" width="130" height="30" rx="8"/><text class="dg-texto" x="249" y="324" text-anchor="middle">Equinodermos</text>
      <rect class="dg-no" x="354" y="196" width="130" height="30" rx="8"/><text class="dg-texto" x="419" y="216" text-anchor="middle">Peixes</text>
      <rect class="dg-no" x="354" y="232" width="130" height="30" rx="8"/><text class="dg-texto" x="419" y="252" text-anchor="middle">Anfíbios</text>
      <rect class="dg-no" x="354" y="268" width="130" height="30" rx="8"/><text class="dg-texto" x="419" y="288" text-anchor="middle">Répteis</text>
      <rect class="dg-no" x="354" y="304" width="130" height="30" rx="8"/><text class="dg-texto" x="419" y="324" text-anchor="middle">Aves e mamíferos</text>
      <rect class="dg-no" x="506" y="196" width="140" height="30" rx="8"/><text class="dg-texto" x="576" y="216" text-anchor="middle">Baleias e golfinhos</text>
      <rect class="dg-no" x="506" y="232" width="140" height="30" rx="8"/><text class="dg-texto" x="576" y="252" text-anchor="middle">Tartarugas</text>
      <rect class="dg-no" x="506" y="268" width="140" height="30" rx="8"/><text class="dg-texto" x="576" y="288" text-anchor="middle">Aves</text>
      <rect class="dg-no" x="506" y="304" width="140" height="30" rx="8"/><text class="dg-texto" x="576" y="324" text-anchor="middle">Mamíferos</text>
    </g>
    <text class="dg-texto-pequeno" x="330" y="374" text-anchor="middle">Os grupos se ramificam a partir de ancestrais comuns</text>
  </svg>`,
  /* microbio */
  microbio: `
  <svg class="diagrama-svg" viewBox="0 0 660 400" role="img" aria-labelledby="t-micro d-micro" xmlns="http://www.w3.org/2000/svg">
    <title id="t-micro">Comparação entre vírus, bactérias e fungos</title>
    <desc id="d-micro">Painéis com as estruturas básicas de um vírus, de uma bactéria e de um fungo, com as diferenças de organização celular.</desc>
    <rect class="dg-painel" x="8" y="8" width="208" height="384" rx="16"/>
    <rect class="dg-painel" x="226" y="8" width="208" height="384" rx="16"/>
    <rect class="dg-painel" x="444" y="8" width="208" height="384" rx="16"/>
    <text class="dg-titulo" x="112" y="36" text-anchor="middle">Vírus</text>
    <text class="dg-titulo" x="330" y="36" text-anchor="middle">Bactéria</text>
    <text class="dg-titulo" x="548" y="36" text-anchor="middle">Fungo</text>

    <polygon class="dg-virus-capside" points="112,84 152,102 152,138 112,156 72,138 72,102"/>
    <path class="dg-virus-fita" d="M90 106c16 9 16 25 32 34M90 134c16-9 16-25 32-34"/>
    <g class="dg-virus-pinos"><line x1="112" y1="84" x2="112" y2="66"/><line x1="152" y1="102" x2="166" y2="90"/><line x1="152" y1="138" x2="166" y2="150"/><line x1="112" y1="156" x2="112" y2="174"/><line x1="72" y1="138" x2="58" y2="150"/><line x1="72" y1="102" x2="58" y2="90"/></g>
    <text class="dg-texto-pequeno" x="112" y="200" text-anchor="middle">Capsídeo proteico</text>
    <text class="dg-texto-pequeno" x="112" y="218" text-anchor="middle">Material genético</text>
    <rect class="dg-nota" x="24" y="240" width="176" height="130" rx="10"/>
    <text class="dg-texto-pequeno" x="38" y="266">Não é uma célula.</text>
    <text class="dg-texto-pequeno" x="38" y="288">Sem metabolismo e</text>
    <text class="dg-texto-pequeno" x="38" y="306">sem reprodução</text>
    <text class="dg-texto-pequeno" x="38" y="324">independente.</text>
    <text class="dg-texto-pequeno" x="38" y="350">Precisa de uma célula</text>
    <text class="dg-texto-pequeno" x="38" y="364">hospedeira para se</text>
    <text class="dg-texto-pequeno" x="38" y="378">multiplicar.</text>

    <rect class="dg-bacteria" x="256" y="88" width="148" height="78" rx="34"/>
    <circle class="dg-bacteria-nucleo" cx="308" cy="127" r="18"/>
    <g class="dg-ribossomos"><circle cx="360" cy="112" r="3"/><circle cx="368" cy="138" r="3"/><circle cx="288" cy="148" r="3"/></g>
    <g class="dg-flagelo"><path d="M256 112c-24 4-32 18-28 30"/><path d="M256 140c-24 4-32 18-28 30"/></g>
    <text class="dg-texto-pequeno" x="330" y="200" text-anchor="middle">Parede celular</text>
    <text class="dg-texto-pequeno" x="330" y="218" text-anchor="middle">Citoplasma e ribossomos</text>
    <rect class="dg-nota" x="242" y="240" width="176" height="130" rx="10"/>
    <text class="dg-texto-pequeno" x="256" y="266">Procariote: sem</text>
    <text class="dg-texto-pequeno" x="256" y="284">núcleo delimitado</text>
    <text class="dg-texto-pequeno" x="256" y="302">por membrana.</text>
    <text class="dg-texto-pequeno" x="256" y="328">Reprodução por</text>
    <text class="dg-texto-pequeno" x="256" y="346">divisão binária.</text>
    <text class="dg-texto-pequeno" x="256" y="364">DNA circular.</text>

    <path class="dg-fungo-hifa" d="M510 170 510 122"/>
    <path class="dg-fungo-hifa" d="M486 170c0-14 8-24 24-30M534 170c0-14-8-24-24-30"/>
    <ellipse class="dg-fungo-esporo" cx="510" cy="100" rx="24" ry="17"/>
    <g class="dg-fungo-esp"><circle cx="492" cy="90" r="4.5"/><circle cx="510" cy="84" r="4.5"/><circle cx="528" cy="90" r="4.5"/><circle cx="500" cy="108" r="4.5"/><circle cx="520" cy="108" r="4.5"/></g>
    <path class="dg-fungo-hifa-fina" d="M486 170c-10 8-24 10-34 4M534 170c10 8 24 10 34 4M510 170v14"/>
    <text class="dg-texto-pequeno" x="548" y="200" text-anchor="middle">Hifas e esporos</text>
    <text class="dg-texto-pequeno" x="548" y="218" text-anchor="middle">Parede de quitina</text>
    <rect class="dg-nota" x="460" y="240" width="176" height="130" rx="10"/>
    <text class="dg-texto-pequeno" x="474" y="266">Eucariote. Faz</text>
    <text class="dg-texto-pequeno" x="474" y="284">fermentação (as</text>
    <text class="dg-texto-pequeno" x="474" y="302">leveduras).</text>
    <text class="dg-texto-pequeno" x="474" y="328">Decompõe matéria</text>
    <text class="dg-texto-pequeno" x="474" y="346">orgânica e cicla</text>
    <text class="dg-texto-pequeno" x="474" y="364">nutrientes.</text>
  </svg>`,
  /* reproducao */
  reproducao: `
  <svg class="diagrama-svg" viewBox="0 0 660 400" role="img" aria-labelledby="t-rep d-rep" xmlns="http://www.w3.org/2000/svg">
    <title id="t-rep">Da fecundação ao desenvolvimento embrionário</title>
    <desc id="d-rep">Sequência com gametas formando o zigoto, seguido de segmentação, formação do blasto, gastrulação e formação de órgãos.</desc>
    <rect class="dg-painel" x="8" y="8" width="644" height="384" rx="16"/>
    <text class="dg-titulo" x="330" y="36" text-anchor="middle">Fecundação e desenvolvimento embrionário</text>

    <circle class="dg-gameta" cx="66" cy="112" r="26"/>
    <text class="dg-texto" x="66" y="119" text-anchor="middle">♂</text>
    <circle class="dg-gameta dg-gameta-f" cx="66" cy="182" r="26"/>
    <text class="dg-texto" x="66" y="189" text-anchor="middle">♀</text>
    <path class="dg-seta" d="M100 130 100 166"/>
    <circle class="dg-zigoto" cx="164" cy="148" r="34"/>
    <circle class="dg-celula" cx="164" cy="148" r="14"/>
    <path class="dg-seta" d="M204 148 240 148"/>
    <circle class="dg-celula" cx="272" cy="148" r="16"/>
    <circle class="dg-celula" cx="300" cy="148" r="9"/>
    <path class="dg-seta" d="M318 148 352 148"/>
    <circle class="dg-blasto" cx="390" cy="148" r="33"/>
    <g class="dg-celulas-blasto"><circle cx="375" cy="135" r="9"/><circle cx="405" cy="135" r="9"/><circle cx="375" cy="161" r="9"/><circle cx="405" cy="161" r="9"/></g>
    <path class="dg-seta" d="M428 148 462 148"/>
    <circle class="dg-gastrula" cx="494" cy="148" r="31"/>
    <path class="dg-mesoderme" d="M470 142c14 9 34 9 48 0"/>
    <path class="dg-seta" d="M530 148 564 148"/>
    <path class="dg-organo-traco" d="M600 130c-8-22-30-22-34 0-4 20 16 30 34 30s38-10 34-30c-4-22-26-22-34 0z"/>

    <g class="dg-rotulos">
      <text class="dg-texto-pequeno" x="66" y="218" text-anchor="middle">Gametas</text>
      <text class="dg-texto-pequeno" x="164" y="218" text-anchor="middle">Zigoto</text>
      <text class="dg-texto-pequeno" x="286" y="218" text-anchor="middle">Segmentação</text>
      <text class="dg-texto-pequeno" x="390" y="218" text-anchor="middle">Blastula</text>
      <text class="dg-texto-pequeno" x="494" y="218" text-anchor="middle">Gástrula</text>
      <text class="dg-texto-pequeno" x="600" y="218" text-anchor="middle">Embrião</text>
    </g>

    <g class="dg-nota">
      <rect x="30" y="250" width="600" height="118" rx="12"/>
      <text class="dg-texto" x="50" y="280">Fecundação: união dos gametes, formando o zigoto (2n).</text>
      <text class="dg-texto" x="50" y="306">Segmentação: divisões rápidas do zigoto, sem aumento de volume.</text>
      <text class="dg-texto" x="50" y="332">Gástrula: aparecem os folhamentos embrionários (ecto, meso e endoderme).</text>
      <text class="dg-texto" x="50" y="358">Organogênese: surgem os sistemas de órgãos do novo ser.</text>
    </g>
  </svg>`,
  /* biomas */
  biomas: `
  <svg class="diagrama-svg" viewBox="0 0 660 400" role="img" aria-labelledby="t-biomas d-biomas" xmlns="http://www.w3.org/2000/svg">
    <title id="t-biomas">Biomas brasileiros e pressões ambientais</title>
    <desc id="d-biomas">Esquema dos biomas brasileiros e das principais ameaças à biodiversidade, com as ações de conservação.</desc>
    <rect class="dg-painel" x="8" y="8" width="396" height="384" rx="16"/>
    <rect class="dg-painel" x="416" y="8" width="236" height="384" rx="16"/>
    <text class="dg-titulo" x="206" y="36" text-anchor="middle">Biomas do Brasil</text>
    <text class="dg-titulo" x="534" y="36" text-anchor="middle">Pressões e conservação</text>

    <g class="dg-biomas">
      <rect class="dg-bioma dg-b1" x="28" y="58" width="176" height="44" rx="10"/>
      <text class="dg-texto" x="116" y="86" text-anchor="middle">Amazônia</text>
      <rect class="dg-bioma dg-b2" x="212" y="58" width="176" height="44" rx="10"/>
      <text class="dg-texto" x="300" y="86" text-anchor="middle">Cerrado</text>
      <rect class="dg-bioma dg-b3" x="28" y="112" width="176" height="44" rx="10"/>
      <text class="dg-texto" x="116" y="140" text-anchor="middle">Mata Atlântica</text>
      <rect class="dg-bioma dg-b4" x="212" y="112" width="176" height="44" rx="10"/>
      <text class="dg-texto" x="300" y="140" text-anchor="middle">Caatinga</text>
      <rect class="dg-bioma dg-b5" x="28" y="166" width="176" height="44" rx="10"/>
      <text class="dg-texto" x="116" y="194" text-anchor="middle">Pantanal</text>
      <rect class="dg-bioma dg-b6" x="212" y="166" width="176" height="44" rx="10"/>
      <text class="dg-texto" x="300" y="194" text-anchor="middle">Pampa</text>
      <rect class="dg-bioma dg-b7" x="28" y="220" width="360" height="44" rx="10"/>
      <text class="dg-texto" x="208" y="248" text-anchor="middle">Biomas marinhos e de transição</text>
      <rect class="dg-bioma dg-b8" x="28" y="274" width="360" height="44" rx="10"/>
      <text class="dg-texto" x="208" y="302" text-anchor="middle">Campos e Campos rupestres</text>
    </g>
    <text class="dg-texto-pequeno" x="206" y="352" text-anchor="middle">O Brasil abriga uma das maiores biodiversidades</text>
    <text class="dg-texto-pequeno" x="206" y="370" text-anchor="middle">do planeta</text>

    <g class="dg-pressoes">
      <rect class="dg-pressao" x="432" y="58" width="204" height="44" rx="10"/>
      <text class="dg-texto" x="446" y="86">Desmatamento e queimadas</text>
      <rect class="dg-pressao" x="432" y="112" width="204" height="44" rx="10"/>
      <text class="dg-texto" x="446" y="140">Poluição e praga agrícola</text>
      <rect class="dg-pressao" x="432" y="166" width="204" height="44" rx="10"/>
      <text class="dg-texto" x="446" y="194">Expansão urbana e mineração</text>
      <rect class="dg-pressao" x="432" y="220" width="204" height="44" rx="10"/>
      <text class="dg-texto" x="446" y="248">Espécies exóticas invasoras</text>
      <rect class="dg-solucao" x="432" y="284" width="204" height="92" rx="10"/>
      <text class="dg-texto" x="446" y="312">Soluções: unidades de</text>
      <text class="dg-texto" x="446" y="334">conservação, manejo e</text>
      <text class="dg-texto" x="446" y="356">educação ambiental.</text>
    </g>
  </svg>`
};
