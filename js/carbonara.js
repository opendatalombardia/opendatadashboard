<div class="tile col-lg-3 col-md-3 col-sm-6 col-xs-12">
          <div class="tile-content">
            <div class="tile-label" style="display: block;">
              <div class="tile-title">Consulenze e Contributi</div>
            </div>
            <div class="tile-description">
              <p class="consulenze"></p>
            </div>
            <div class="tile-footer">
              <a href="https://www.dati.lombardia.it/resource/ywm2-vqgc" target="_blank">Vai al dataset »
              </a>
            </div>
          </div>
        </div>


var i;
var dataName;
var dataId;
var datasets = [
  { name: "Aste Di Vendita Immobili Pubblici", id: "57ps-t8bu"},
  { name: "Avvisi Di Preinformazione Osservatorio Regionale", id: "yaaj-kinn"},
  { name: "Reticolo Idrografico Regionale Unificato", id: "2398-zrim"},
  { name: "Bandi Di Gara Della P.A. Lombarda", id: "cjgj-du8b"},
  { name: "Bandi Di Gara Osservatorio Regionale", id: "xuf9-uhx8"},
  { name: "Beni Culturali Osservatorio Regionale", id: "7n8w-k32c"},
  { name: "Cened - Certificazione Energetica Degli Edifici", id: "rsg3-xhvk"},
  { name: "Contributi E Corrispettivi Di Regione Lombardia Artt. 26-27 Dlgs 33/2013 - Ex Art. 18 Dl 83/2012. Ix Legislatura", id: "bnec-3bna"},
  { name: "Contributi E Corrispettivi Di Regione Lombardia Artt. 26-27 Dlgs 33/2013 - Ex Art. 18 Dl 83/2012. X Legislatura", id: "ywm2-vqgc"},
  { name: "Convenzioni Arca", id: "gdbx-vyii"},
  { name: "Dati Sensori Meteo", id: "647i-nhxk"},
  { name: "Elenco Fornitori Telematico Della Giunta Di Regione Lombardia", id: "axfy-6wii"},
  { name: "Elenco Registro Regionale Sonde Geotermiche", id: "cm2i-qe47"},
  { name: "Elenco Ubicazione Tagli Boschivi", id: "dgaa-fz8n"},
  { name: "Esiti Di Gara Osservatorio Regionale", id: "f9t5-psin"},
  { name: "Gestione Associata Obbligatoria", id: "b494-czzt"},
  { name: "Impianti Di Erogazione Metano", id: "5n8b-t34h"},
  { name: "Pgt. Piani Di Governo Del Territorio", id: "ijqk-ahfp"},
  { name: "Pgt. Piani Di Governo Del Territorio - Elenco Documenti", id: "pxty-e6fu"},
  { name: "Sintel - Dettaglio Lotti Di Gara", id: "9s8j-zavb"}
];

function mappingfor () {
        for (i = 0; i < datasets.length; i++) {
            var dataName = datasets[i].name;
            var dataId = datasets[i].id;
            console.log(datasets[i].name + " " + datasets[i].id);
            function getData( url, query, selector ) {
               $.get(url + "?" + query, function(data) {
                  $(selector)
                   .append('<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">' +
                              '<div class="tile-content">' +
                                '<div class="tile-label">' + dataName + '</div>' +
                                '<div class="tile-description"><p class="' + dataName + '">' + data[0].count + '</p></div>' +
                                '<div class="tile-footer"><a href="https://www.dati.lombardia.it/resource/' + dataId + '" target="_blank">Vai al dataset »</a></div>' +
                              '</div></div>'
                           );
            });
            };
            getData(
                    "https://www.dati.lombardia.it/resource/" + datasets[i].id,
                    "$select=count(*)",
                     ("div.row")
                   );
            }
}
mappingfor();
