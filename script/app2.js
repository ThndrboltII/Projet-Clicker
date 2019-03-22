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
var uranium=0;
var argent=0;

	$("#inventaire").on("click",item);
  $("#shop").on("click",magasin);
	$("#back").on("click",retour);

		function item(){
			$("#ouvrinventaire").css("visibility","visible");
			$("#ouvrshop").css("visibility", "hidden");
			$("#back").css("visibility", "visible");
		}

  	function magasin(){
			$("#ouvrshop").css("visibility","visible");
			$("#ouvrinventaire").css("visibility", "hidden");
			$("#Vendre").on("click", conversion);
			$("#back").css("visibility", "visible");

				function conversion(){
					console.log(argent);
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
					console.log(argent);
				}
		}

		function retour(){
			$("#ouvrinventaire").css("visibility", "hidden");
			$("#ouvrshop").css("visibility", "hidden");
			$("#back").css("visibility", "hidden");
		}
});
