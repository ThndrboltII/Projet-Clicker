$(document).ready(function() {
	$("#argent").text("Argent: " + argent + "$");
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
	$("#achatfinal").on("click", fin);


	//Ouvrir l'inventaire et fermer le magasin
		function item(){
			$("#ouvrinventaire").css("visibility","visible");
			$("#ouvrshop").css("visibility", "hidden");
			$("#back").css("visibility", "visible");
			$("#vente img").css("visibility", "hidden");
			$("#ventbombe img").css("visibility", "hidden");
			$("#ventbateau img").css("visibility", "hidden");
			$("#ventrecrue img").css("visibility", "hidden");
			$("#ventscaphandre img").css("visibility", "hidden");
			$("#ventcombi img").css("visibility", "hidden");
			$("#ventfinal img").css("visibility", "hidden");

			//Voir si on possède la bombe
			if (bombe==1) {
					$("#inventbombe img").css("visibility", "visible");
			}
			else {}

			//Voir si on possède le bateau
			if (bateau==1) {
					$("#inventbateau img").css("visibility", "visible");
			}
			else {}

			//Voir si on possède le scaphandre
			if (scaphandre==1) {
					$("#inventscaphandre img").css("visibility", "visible");
			}
			else {}

			//Voir si on possède la combinaison NBC
			if (combi==1) {
					$("#inventcombi img").css("visibility", "visible");
			}
			else {}
		}

		//Ouvrir le magasin et fermer l'inventaire
  	function magasin(){
			$("#ouvrshop").css("visibility","visible");
			$("#ouvrinventaire").css("visibility", "hidden");
			$("#back").css("visibility", "visible");
			$("#inventbombe img").css("visibility", "hidden");
			$("#inventbateau img").css("visibility", "hidden");
			$("#inventscaphandre img").css("visibility", "hidden");
			$("#inventcombi img").css("visibility", "hidden");
			$("#vente img").css("visibility", "visible");
			$("#ventbombe img").css("visibility", "visible");
			$("#ventbateau img").css("visibility", "visible");
			$("#ventrecrue img").css("visibility", "visible");
			$("#ventscaphandre img").css("visibility", "visible");
			$("#ventcombi img").css("visibility", "visible");
			$("#ventfinal img").css("visibility", "visible");
			}

				//Convertir les ressources en argent
				function conversion(){
					argent=argent+mineral[0].counter+(5*mineral[1].counter)+(10*mineral[9].counter)+(30*mineral[2].counter)+(100*mineral[7].counter)+(100*mineral[8].counter)+(100*mineral[6].counter)+(500*mineral[3].counter)+(700*mineral[4].counter)+(1000*mineral[5].counter);
					mineral[0].counter=0; //rock
					$("#rock").html('<img src="../images/minerals/rock.png" id="rockimg"/>Rock: ' + mineral[0].counter);
					mineral[1].counter=0; //coal
					$("#coal").html('<img src="../images/minerals/coal.png" id="coalimg"/>Coal: ' + mineral[1].counter);
					mineral[9].counter=0; //lapis
					$("#lapis").html('<img src="../images/minerals/lapis.png" id="lapisimg"/>Lapis-lazuli: ' + mineral[9].counter);
					mineral[2].counter=0; //gold
					$("#gold").html('<img src="../images/minerals/gold.png" id="goldimg"/>Gold: ' + mineral[2].counter);
					mineral[7].counter=0; //ruby
					$("#ruby").html('<img src="../images/minerals/ruby.png" id="rubyimg"/>Ruby: ' + mineral[7].counter);
					mineral[8].counter=0; //sapphire
					$("#sapphire").html('<img src="../images/minerals/sapphire.png" id="sapphireimg"/>Sapphire: ' + mineral[8].counter);
					mineral[6].counter=0; //emerald
					$("#emerald").html('<img src="../images/minerals/emerald.png" id="emeraldimg"/>Emerald: ' + mineral[6].counter);
					mineral[3].counter=0; //diamond
					$("#diamond").html('<img src="../images/minerals/diamond.png" id="diamondimg"/>Diamond: ' + mineral[3].counter);
					mineral[4].counter=0; //palladium
					$("#palladium").html('<img src="../images/minerals/palladium.png" id="palladiumimg"/>Palladium: ' + mineral[4].counter);
					mineral[5].counter=0; //uranium
					$("#uranium").html('<img src="../images/minerals/uranium.png" id="uraniumimg"/>Uranium: ' + mineral[5].counter);
					$("#argent").text("Argent: " + parseInt(argent) + "$");
				}

				//Engager un nouveau mineur
				function engager(){
					if (argent>=mineurval) {
						if (mineur<10){
							argent=argent-mineurval;
							$("#argent").text("Argent: " + argent + "$");
							mineur=mineur+1;
							mineurval=Math.floor(mineurval*1.8);
							$("#achatemploye").attr("value",mineurval+"$");
							$("#nombrecrue").text(mineur);
							if(mineur==10){
								$("#achatemploye").attr("value","MAX");
							}
						}else{
							alert("Vous avez atteint le maximum de mineurs.");
						}
					}
				}

				//Acheter le bombe
				function bomber(){
					if (bombe==0){
						if (argent>=2000){
						argent=argent-2000;
						$("#argent").text("Argent: " + argent + "$");
						bombe=bombe+1;
					}
						else {}
					}
					else {
						window.alert("Vous avez déjà acheter la bombe");
					}
				}

				//Acheter le bateau
				function naviguer() {
					if (bateau==0){
						if (argent>=5000){
						argent=argent-5000;
						$("#argent").text("Argent: " + argent + "$");
						bateau=bateau+1;
					}
						else {}
					}
					else {
						window.alert("Vous avez déjà acheter le bateau");
					}
				}

				//Acheter le scaphandre
				function scaphandrer() {
					if (scaphandre==0){
						if (argent>=20000){
						argent=argent-20000;
						$("#argent").text("Argent: " + argent + "$");
						scaphandre=scaphandre+1;
						}
						else {}
					}
					else {
						window.alert("Vous avez déjà acheter le scaphandre");
					}
				}

				//Acheter le combinaison NBC
				function combinaisonner() {
					if (combi==0){
						if (argent>=200000){
						argent=argent-200000;
						$("#argent").text("Argent: " + argent + "$");
						combi=combi+1;
					}
						else {}
					}
					else {
						window.alert("Vous avez déjà acheter la combinaison NBC");
					}
				}

				//Acheter l'objet permettant de terminer le jeu
				function fin() {
					if (argent>=20000000){
						argent=argent-20000000;
						$("#argent").text("Argent: " + argent + "$");
						window.location="../html/final.html";
					}
					else {}
				}

				//Permet de fermer le magasin et l'inventaire
		function retour(){
			$("#ouvrinventaire").css("visibility", "hidden");
			$("#ouvrshop").css("visibility", "hidden");
			$("#back").css("visibility", "hidden");
			$("#inventbombe img").css("visibility", "hidden");
			$("#inventbateau img").css("visibility", "hidden");
			$("#inventscaphandre img").css("visibility", "hidden");
			$("#inventcombi img").css("visibility", "hidden");
			$("#vente img").css("visibility", "hidden");
			$("#ventbombe img").css("visibility", "hidden");
			$("#ventbateau img").css("visibility", "hidden");
			$("#ventrecrue img").css("visibility", "hidden");
			$("#ventscaphandre img").css("visibility", "hidden");
			$("#ventcombi img").css("visibility", "hidden");
			$("#ventfinal img").css("visibility", "hidden");
		}
});
