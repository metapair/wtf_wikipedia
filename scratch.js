const wtf = require('./src/index');
// const readFile = require('./tests/lib/_cachedPage');
// const wtf = require('./builds/wtf_wikipedia');
// const wtf = require('./build');

// (async () => {
//   var doc = await wtf.fetch('Jurassic Park (film)');
//   console.log(doc.infoboxes(0).keyValue());
// })();

// let doc = readFile('jodie_emery');
// console.log(doc.markdown());
let str = `{| class="wikitable" align="center"
| fun
| cool
|}
`;
// str = `<chem>{C_mathit{x}H_mathit{y}} + mathit{z}O2 -> {mathit{x}CO2} +rac{mathit{y}}{2}H2O</chem> `;
// str = `{{chem|link=oxygen|O|2}} `;
// str = `{{coord|40.7127|N|74.0059|W|region:US-NY|format=dms|display=inline,title}}`;
// str = `  {{tryit
//   | name = New York City
//   | official_name                   = City of New York
//   | settlement_type                 = [[City]]
//   | named_for                       = [[James II of England|James, Duke of York]]
//   | coordinates                     =
//   }}`;
// str = `hello {{citation |url=cool.com/?fun=yes/   }}{{CITE book |title=the killer and the cartoons }}`;
str = `{{inflection of|avoir||3|p|pres|ind|lang=fr}}`;
str = `{{tag|math|attribs=chem}}`;
str = `{{plural|-1.5|page}}`;
str = `{{First word| Foo bar baz}}`;
str = `{{nobold|text-string}}`;
let doc = wtf(str);
console.log(doc.text());
console.log(doc.templates(0));
// console.log(doc.links(0));
