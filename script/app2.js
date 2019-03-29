$(document).ready(function() {
var rock=100;
var coal=5;
var lapis=1;
var gold=3;
var ruby=3;
var sapphire=2;
var emerald=1;
var diamond=1;
var palladium=1;
var uranium=10000;
var argent=0;
var mineur=1;
var bombe=0;
var bateau=0;
var scaphandre=0;
var combi=0;


//abonnements
	$("#inventaire").on("click",item);
  $("#shop").on("click",magasin);
	$("#back").on("click",retour);
	$("#Vendre").on("click", conversion);
	$("#achatemploye").on("click", engager);
	$("#achatbombe").on("click", bomber);
	$("#achatbateau").on("click", naviguer);
	$("#achatscaphandre").on("click", scaphandrer);
	$("#achatcombi").on("click", combinaisonner);




		function item(){
			$("#ouvrinventaire").css("visibility","visible");
			$("#ouvrshop").css("visibility", "hidden");
			$("#back").css("visibility", "visible");
		}

  	function magasin(){
			$("#ouvrshop").css("visibility","visible");
			$("#ouvrinventaire").css("visibility", "hidden");
			$("#back").css("visibility", "visible");
			}

				function conversion(){
					argent=argent+rock+(5*coal)+(10*lapis)+(30*gold)+(100*ruby)+(100*sapphire)+(200*emerald)+(500*diamond)+(700*palladium)+(1000*uranium);
					rock=rock-rock;
					coal=coal-coal;
					lapis=lapis-lapis;
					gold=gold-gold;
					ruby=ruby-ruby;
					sapphire=sapphire-sapphire;
					emerald=emerald-emerald;
					diamond=diamond-diamond;
					palladium=palladium-palladium;
					uranium=uranium-uranium;
				}

				function engager(){
					if (argent>=2500) {
						argent=argent-2500;
						mineur=mineur+1;
						$("#nombrecrue").text(mineur);
					}
					else {
					}
				}

				function bomber(){
					if (bombe==0){
						if (argent>=2000){
						argent=argent-2000;
						bombe=bombe+1;
					}
						else {}
					}
					else {
						window.alert("Vous avez déjà acheter la bombe")
					}
				}

				function naviguer() {
					if (bateau==0){
						if (argent>=5000){
						argent=argent-5000;
						bateau=bateau+1;
					}
						else {}
					}
					else {
						window.alert("Vous avez déjà acheter le bateau")
					}
				}
				function scaphandrer() {
					if (scaphandre==0){
						if (argent>=20000){
						argent=argent-20000;
						scaphandre=scaphandre+1;
					}
						else {}
					}
					else {
						window.alert("Vous avez déjà acheter le scaphandre")
					}
				}

				function combinaisonner() {
					if (combi==0){
						if (argent>=200000){
						argent=argent-200000;
						combi=combi+1;
					}
						else {}
					}
					else {
						window.alert("Vous avez déjà acheter la combinaison NBC")
					}
				}


		function retour(){
			$("#ouvrinventaire").css("visibility", "hidden");
			$("#ouvrshop").css("visibility", "hidden");
			$("#back").css("visibility", "hidden");
		}
});
