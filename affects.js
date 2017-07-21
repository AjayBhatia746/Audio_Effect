var delay;
var chorus;
var wahwah;
var overdrive;
var tremolo;

function tunaDemo(){

		var tuna = new Tuna(context);

		wahwah = new tuna.WahWah({
			automode: true,
			baseFrequency: 0.8,
			excursionOctaves: 1,
			sweep: 0.6,
			resonance: 70,
			sensitivity: 0.5,
			bypass: 1


		});

		delay = new tuna.Delay({
			feedback: 0.78,
			delayTime: 70,
			wetLevel: 0.9,
			dryLevel: 1,
			cutoff: 5000,
			bypass: true

		});

		overdrive = new tuna.Overdrive({
			outputGain: 1,
			drive: 0.7,
			curveAmount: 1,
			algorithmIndex: 4,
			bypass: 1


		});

		tremolo = new tuna.Tremolo({

			intensity: 1,
			rate: 8,
			stereoPhase: 140,
			bypass: 1

		});

}



var context = new AudioContext;
tunaDemo();
var song = document.querySelector('audio');
var source = context.createMediaElementSource(song);

source.connect(wahwah.input);
source.connect(tremolo.input);
source.connect(overdrive.input);
source.connect(delay.input);
wahwah.connect(context.destination);
delay.connect(context.destination);
overdrive.connect(context.destination);
tremolo.connect(context.destination);


var a = document.querySelector('.a');
var b = document.querySelector('.b');
var c = document.querySelector('.c');
var d = document.querySelector('.d');

a.addEventListener('click',function(e){
	console.log(this);
	$(this).toggleClass("border");

	if(delay.bypass){

		delay.bypass = false;

	}

	else {
		delay.bypass = true;
	}

});

b.addEventListener('click',function(e){
	$(this).toggleClass("border");

	if(wahwah.bypass){

		wahwah.bypass = 0;

	}

	else {
		wahwah.bypass = 1;
	}

});


c.addEventListener('click',function(e){
	$(this).toggleClass("border");

	if(overdrive.bypass){

		overdrive.bypass = 0;

	}

	else {
		overdrive.bypass = 1;
	}

});

d.addEventListener('click',function(e){
	$(this).toggleClass("border");

	if(tremolo.bypass){

		tremolo.bypass = 0;

	}

	else {
		tremolo.bypass = 1;
	}

});
