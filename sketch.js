var angle1 = 100;
var angle2 = 100;
var angle3 = 100;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;

  	//opções dos corpos
    var plane_options={
	 isStatic: true
	}

	var block1_options={
	 isStatic: true
	}

	var block2_options={
	 isStatic: true
	}

	var rotator1_options={
	 isStatic: true
	}

	var rotator2_options={
		isStatic: true
    }

	var rotator3_options={
		isStatic: true
	}

	var particle_options={
	  restitution: 0.4,
	  friction: 0.2
	}

	//Crie os Corpos aqui.
	plane = Bodies.rectangle(200, 390, 400, 20, plane_options);
	World.add(world, plane);

	block1 = Bodies.rectangle(300, 230, 90, 20, block1_options);
	World.add(world, block1);

	block2 = Bodies.rectangle(100, 230, 90, 20, block2_options);
	World.add(world, block2);

	rotator1 = Bodies.rectangle(200, 150, 150, 20, rotator1_options);
	World.add(world, rotator1);

	rotator2 = Bodies.rectangle(200, 150, 150, 20, rotator2_options);
	World.add(world, rotator2);

	rotator3 = Bodies.rectangle(200, 150, 150, 20, rotator3_options);
	World.add(world, rotator3);

	particle1 = Bodies.circle(200, 10, 10, particle_options);
	World.add(world, particle1);

	particle2 = Bodies.circle(200, 10, 10, particle_options);
	World.add(world, particle2);

	particle3 = Bodies.circle(200, 10, 10, particle_options);
	World.add(world, particle3);

	particle4 = Bodies.circle(200, 10, 10, particle_options);
	World.add(world, particle4);

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  Engine.update(engine);

  //formas retangulares
  rect(block1.position.x, block2.position.y, 90, 20);

  rect(block2.position.x, block2.position.y, 90, 20);

  rect(plane.position.x, plane.position.y, 400, 20);

  //forma dos rotators
  Matter.Body.rotate(rotator1, angle1)
  push();
  translate(rotator1.position.x, rotator1.position.y);
  rotate(angle1);
  rect(0, 0, 150, 20);
  pop();
  angle1 += 2;


  Matter.Body.rotate(rotator2, angle2)
  push();
  translate(rotator2.position.x, rotator2.position.y);
  rotate(angle2);
  rect(0, 0, 150, 20);
  pop();
  angle2 += 4;


  Matter.Body.rotate(rotator3, angle3)
  push();
  translate(rotator3.position.x, rotator3.position.y);
  rotate(angle3);
  rect(0, 0, 150, 20);
  pop();
  angle3 += 6;

  //formas circulares
  ellipse(particle1.position.x, particle1.position.y, 20);

  ellipse(particle2.position.x, particle2.position.y, 20);

  ellipse(particle3.position.x, particle3.position.y, 20);

  ellipse(particle4.position.x, particle4.position.y, 20);



  
  drawSprites();
 
}



