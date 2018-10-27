(function($){

 // PARTIE 1
//objet informations qui gère le nom, le prénom et le poste visé 

function informations (tableau_btn, modif){
	this.btn = tableau_btn;
	this.modification = change;
}





      //liste méthode relative a: nom, prenom poste, a propos de vous contact 
informations.prototype.lien_nom = function(){
	if(this.btn[0].val()==''){
	        this.modification[0].text('Nom') 
		}
		
		else {
			var name = this.btn[0].val()
	        this.modification[0].text(name) 
        }
    };


informations.prototype.lien_prenom = function(){
	if(this.btn[1].val()==''){
		this.modification[1].text('prénom')
		}
		else {
		
	var nickname = this.btn[1].val()
	this.modification[1].text(nickname) 
	}

};


informations.prototype.lien_poste = function(){
	if(this.btn[2].val()==''){
		this.modification[2].text('poste')
		}
		else {
	var poste = this.btn[2].val()
	this.modification[2].text(poste)
	}
};

informations.prototype.lien_about = function(){
	if(this.btn[3].val()==''){
		this.modification[3].text('Entrez ici votre description')
		}
		else {
	var about = this.btn[3].val()
	this.modification[3].text(about)
	}
};



informations.prototype.lien_adresse = function(){
	if(this.btn[4].val()==''){
		this.modification[4].text('Entrez votre addresse')
		}
		else {
	var adresse = this.btn[4].val()
	this.modification[4].text(adresse)
	}
};


informations.prototype.lien_numero = function(){
	if(this.btn[5].val()==''){
		this.modification[5].text('Entrez votre numéro de téléphone')
		}
		else {
	var numero = this.btn[5].val()
	this.modification[5].text(numero)
	}
};

informations.prototype.lien_mail = function(){
	if(this.btn[6].val()==''){
		this.modification[6].text('Entrez une adresse mail valide')
		}
		else {
	var mail = this.btn[6].val()
	this.modification[6].text(mail)
	console.log(mail)
	}
};

informations.prototype.lien_diplome = function() {
 	var diplome = this.btn[7].val();
 	this.modification[7].text(diplome);
 }; 



var tableau_btn = [
    $('#name_btn'),
    $('#nickname_btn'),
    $('#poste_btn'),
    $('#about_you_btn'),
    $('#adresse_btn'),
    $('#numero_btn'),
    $('#mail_btn'),
    $('#diplome_btn')
]

var change = [
	$('#name'),
	$('#nickname'),
	$('#post'),
	$('#about'),
	$('#adresse'),
	$('#numero'),
	$('#mail'),
	
	
]



var tab_info = new informations (tableau_btn, change)


$('.action').on( 'click', function() {
	
	tab_info.lien_nom()
	tab_info.lien_prenom()
	tab_info.lien_poste()
	tab_info.lien_about()
	tab_info.lien_adresse()
	tab_info.lien_numero()
	tab_info.lien_numero()
	tab_info.lien_mail()

	
	
})


	                     // PARTIE 2
//Objet qui gère les diplomes et les différentes experiences

//Diplome



function diplome(description,date, nom_diplome,etablissement,descriptionBtn,dateBtn,nameBtn,etablissementBtn){
	this.description=tableau_description;
	this.date_diplome=tableau_date_diplome;
	this.name_diplome= tableau_name_diplome;
	this.etablissement = tableau_etablissement;
	this.descriptionBtn = tableau_description_btn;
	this.dateBtn = tableau_date_diplome_btn;
	this.name_diplome_btn = tableau_name_diplome_btn;
	this.etablissement_btn= tableau_etablissement_btn;
	
};

function experience(poste, posteBtn, description, description_btn, date, date_btn){
	this.poste = tableau_poste;
	this.poste_btn = tableau_poste_btn;
	this.description= tableau_entreprise;
	this.description_btn = tableau_descriptionExp_btn;
	this.date_exp = tableau_exp_date;
	this.date_exp_btn = tableau_exp_date_btn;
	

}



	
	


//         Partie diplome 
//Nom du diplome 
tableau_name_diplome= [
	$('#diplome1'),
	$('#diplome2'),
	$('#diplome3'),
];

tableau_name_diplome_btn =[
	$('#name_diplome_btn1'),
	$('#name_diplome_btn2'),
	$('#name_diplome_btn3'),
];


//Date Diplome
tableau_date_diplome=[
	$('#date_diplome1'),
	$('#date_diplome2'),
	$('#date_diplome3'),

];

tableau_date_diplome_btn =[
	$('#date_diplome_btn1'),
	$('#date_diplome_btn2'),
	$('#date_diplome_btn3'),
];


//Etablissement Diplome
tableau_etablissement=[
	$('#etablissement1'),
	$('#etablissement2'),
	$('#etablissement3'),
	
];

tableau_etablissement_btn =[
	$('#etablissement_btn1'),
	$('#etablissement_btn2'),
	$('#etablissement_btn3'),
];

//Description diplome
tableau_description = [
	$('#description1'),
	$('#description2'),
	$('#description3'),
];

tableau_description_btn = [
	$('#description_btn1'),
	$('#description_btn2'),
	$('#description_btn3'),
];






//       Partie Experience
//Nom du poste
 

tableau_poste=[
	$('#exp1'),
	$('#exp2'),
	$('#exp3'),
];

tableau_poste_btn =[
	$('#exp_btn1'),
	$('#exp_btn2'),
	$('#exp_btn3'),
];



//Poste occupé 
tableau_entreprise =[
	$('#entreprise_exp1'),
	$('#entreprise_exp2'),
	$('#entreprise_exp3'),
];

tableau_descriptionExp_btn =[
	$('#entreprise_exp_btn1'),
    $('#entreprise_exp_btn2'),
	$('#entreprise_exp_btn3'),
];



//Periode experience 
tableau_exp_date = [
	$('#date_exp1'),
	$('#date_exp2'),
	$('#date_exp3'),
	
];
tableau_exp_date_btn =[
	$('#date_exp_btn1'),
	$('#date_exp_btn2'),
	$('#date_exp_btn3'),

];







//Manipulation objets et méthodes pour gérer les diplome
var aDiplome = new diplome(tableau_description,tableau_date_diplome,tableau_name_diplome,tableau_etablissement,tableau_description_btn,tableau_date_diplome,tableau_name_diplome_btn,tableau_etablissement_btn);

diplome.prototype.lien_description = function(){
	if(this.descriptionBtn[0].val()==''){
		this.description[0].text('Entrez une déscription')
		}
		else {
	
	var description1 =this.descriptionBtn[0].val()
	this.description[0].text(description1)
	}

	
if(this.descriptionBtn[1].val()==''){
		this.description[1].text('Entrez une déscription')
		}
		else {
var description2 =this.descriptionBtn[1].val()
	this.description[1].text(description2)
	}
	
	
	
if(this.descriptionBtn[2].val()==''){
		this.description[2].text('Entrez une déscription')
		}
		else {	
	var description3 =this.descriptionBtn[2].val()
	this.description[2].text(description3)
	}
	
};

diplome.prototype.lien_date= function(){
	
if(this.dateBtn[0].val()==''){
		this.date_diplome[0].text('Période 1')
		}
		else {
	var date1 =this.dateBtn[0].val()
	this.date_diplome[0].text(date1);
	}
	
	if(this.dateBtn[1].val()==''){
		this.date_diplome[1].text('Période 2')
		}
		else {
	var date2 =this.dateBtn[1].val()
	this.date_diplome[1].text(date2);
	}
	
	if(this.dateBtn[2].val()==''){
	this.date_diplome[2].text('Période 3')
	}
	else {
	var date3 =this.dateBtn[2].val()
	this.date_diplome[2].text(date3);
	}
};








diplome.prototype.lien_etablissement = function(){
	if(this.etablissement_btn[0].val()==''){
		this.etablissement[0].text('établissement 1')
		}
		else {
	var etablissement1= this.etablissement_btn[0].val()
	this.etablissement[0].text(etablissement1);
	}
	
	if(this.etablissement_btn[1].val()==''){
		this.etablissement[1].text('établissement 2')
		}
		else {
	var etablissement2= this.etablissement_btn[1].val()
	this.etablissement[1].text(etablissement2);
	}
	
	if(this.etablissement_btn[2].val()==''){
		this.etablissement[2].text('établissement 3')
		}
		else {
	var etablissement3= this.etablissement_btn[2].val()
	this.etablissement[2].text(etablissement3);
	}
};

diplome.prototype.lien_nom_diplome = function(){
	if(this.name_diplome_btn[0].val()==''){
		this.name_diplome[0].text('diplome 1')
		}
		else {
	var diplome1 = this.name_diplome_btn[0].val()
	this.name_diplome[0].text(diplome1)
	}
	
	if(this.name_diplome_btn[1].val()==''){
		this.name_diplome[1].text('diplome 2')
		}
		else {
	var diplome2 = this.name_diplome_btn[1].val()
	this.name_diplome[1].text(diplome2)
	}
	
	if(this.name_diplome_btn[2].val()==''){
		this.name_diplome[2].text('diplome 3')
		}
		else {
	var diplome3 = this.name_diplome_btn[2].val()
	this.name_diplome[2].text(diplome3)
	}
}




//Manipulation objet et méthode pour gérer l'éxperience

var aExperience = new experience(tableau_poste, tableau_poste_btn, tableau_entreprise, tableau_descriptionExp_btn, tableau_exp_date, tableau_exp_date_btn)



experience.prototype.lien_poste = function(){
	
	if(this.poste_btn[0].val()==''){
		this.poste[0].text('poste1')
		}
		else {
	var poste1 = this.poste_btn[0].val()
	this.poste[0].text(poste1)
	}
	
	if(this.poste_btn[1].val()==''){
		this.poste[1].text('poste2')
		}
		else {
	var poste2 = this.poste_btn[1].val()
	this.poste[1].text(poste2)
	}
	if(this.poste_btn[2].val()==''){
		this.poste[2].text('poste3')
		}
		else {
	var poste3 = this.poste_btn[2].val()
	this.poste[2].text(poste3)
	}
}

experience.prototype.lien_periode= function (){
	if(this.date_exp_btn[0].val()==''){
		this.date_exp[0].text('Durée expérience 1')
		}
		else {
	var periode1 = this.date_exp_btn[0].val()
	this.date_exp[0].text(periode1)
	}
	if(this.date_exp_btn[1].val()==''){
		this.date_exp[1].text('Durée expérience 2')
		}
		else {
	var periode2 = this.date_exp_btn[1].val()
	this.date_exp[1].text(periode2)
	}
	if(this.date_exp_btn[2].val()==''){
		this.date_exp[2].text('Durée expérience 3')
		}
		else {
	var periode3 = this.date_exp_btn[2].val()
	this.date_exp[2].text(periode3)
	}
}

experience.prototype.lien_expDescription = function () {
	if(this.description_btn[0].val()==''){
		this.description[0].text('Description')
		}
		else {
	var description1 = this.description_btn[0].val();
	this.description[0].text(description1);
	};
	
	if(this.description_btn[1].val()==''){
		this.description[1].text('Description')
		}
		else {
	var description2 = this.description_btn[1].val()
	this.description[1].text(description2)
	};
	if(this.description_btn[2].val()==''){
		this.description[2].text('Description')
		}
		else {
	var description3 = this.description_btn[2].val()
	this.description[2].text(description3)
	}
	
};


// programme principale diplome
$('.action').on('click',function(){
	aDiplome.lien_description();
	aDiplome.lien_date();
	aDiplome.lien_etablissement();
	aDiplome.lien_nom_diplome();
})

//programme principal experience
$('.action').on('click',function(){
	aExperience.lien_poste();
	aExperience.lien_periode();
	aExperience.lien_expDescription()
})





// Partie 3 : rendre accessible les formulaires au clic et les faires disparaitre aux clic de envoyer.

var hide = function(){
	$('#modifier').on('click',function(){
		$('.hide').css('display','block')
		
	})
	
}

var show = function(){
	$('#envoyer').on('click',function(){
		$('.hide').css('display','none')
	})
}

hide()
show()

$('.hide').fadeIn();




















	







	 
	 
	 
	 










})(jQuery);
	









 

		


