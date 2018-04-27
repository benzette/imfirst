// view
var app = function(app) {

    app.View = function(model, layoutManager) {

        var v = this;
        zog(model.colors);

        // PAGE 1 Instructions

        var page1 = v.page1 = new Container();

        // ~~~~~~~  HEADER ~~~~~~~~~~~
        var header = new Container(500,100).addTo(page1);
        var mlogo = frame.asset("MarlowLogo.png")
        .center(header);


        // ~~~~~~~  CONTENT ~~~~~~~~~~~
        var content = new Container(500,500).addTo(page1);
        // put intro screen
        var instructionsTitle = new Label("Instructions", 54, null, "white").center(content)
        .pos(null, 10);

        var instructionsDivider = new Rectangle(320, 4, "#0f616d")
        .center(content)
        .pos(null, 80);

        var sentenceText = "Help Marlow the Marshmallow collect graham crackers and chocolate to become a S'more. Tilt the screen to avoid the cacti!";
        var instructions = new Label({text:sentenceText, size: 38, color:"#fff", lineWidth:380})
        .center(content)
        .pos(null, 120);



        // ~~~~~~~  FOOTER ~~~~~~~~~~~
        var label1 = v.label1 = new Label({
           text:"Start",
           size:14,
           color:"white"
        });

        var footer = v.button1 = new Button({
           label:label1,
           width:100,
           height:26,
           color:"#7ACED6",
           rollColor: "#0f616d",
           corner:0
        });
        v.button1.addTo(page1);


        // ~~~~~~~  LAYOUT ~~~~~~~~~~~

        var layout1 = v.layout1 = new Layout(page1,[
            {object:header, marginTop:5, backgroundColor: "#0f616d"},
            {object:content, marginTop:5},
            {object:footer, marginTop:5, maxWidth:90, minHeight:15}
        ], 5, "#1b91a3", null, new Shape(), stage);
        layoutManager.add(layout1);

//----------------------------------------------------------------------------//

        // PAGE 2 Choose a Level

        var page2 = v.page2 = new Container();

        // ~~~~~~~  HEADER ~~~~~~~~~~~
        var header = new Container(500,100).addTo(page2);
    	var mlogo2 = mlogo.clone()
    		.center(header);


        // ~~~~~~~  CONTENT ~~~~~~~~~~~
        var content = new Container(500,500).addTo(page2);
        var chooseLevel = new Label("Choose a Level:", 36, null, "white").center(content)
        .pos(null, 10);

        // Level 1 Button
        var lvl1ButtonLabel = v.lvl1ButtonLabel = new Label({
           text:"1",
           size:60,
           color:"#0f616d"
        });

        var lvl1Button = v.lvl1Button = new Button({
           label:lvl1ButtonLabel,
           width:120,
           height:120,
           color:"#efde5d",
           rollColor: "#0f616d",
           corner:0.5
        });
        v.lvl1Button.addTo(content).pos(50, 100);

        // Level 2 Button
        var lvl2ButtonLabel = v.lvl2ButtonLabel = new Label({
           text:"2",
           size:60,
           color:"#0f616d"
        });

        var lvl2Button = v.lvl2Button = new Button({
           label:lvl2ButtonLabel,
           width:120,
           height:120,
           color:"#efde5d",
           rollColor: "#0f616d",
           corner:0
        });
        v.lvl2Button.addTo(content).pos(190, 100);

        // Level 3 Button
        var lvl3ButtonLabel = v.lvl3ButtonLabel = new Label({
           text:"3",
           size:60,
           color:"#0f616d"
        });

        var lvl3Button = v.lvl3Button = new Button({
           label:lvl3ButtonLabel,
           width:120,
           height:120,
           color:"#efde5d",
           rollColor: "#0f616d",
           corner:0
        });
        v.lvl3Button.addTo(content).pos(330, 100);


        // ~~~~~~~  FOOTER ~~~~~~~~~~~
        // var label2 = v.label2 = new Label({
        //    text:"Instructions",
        //    size:10,
        //    color:"white"
        // });
        //
        // var footer = v.button2 = new Button({
        //    label:label2,
        //    width:100,
        //    height:30,
        //    color:"#7ACED6",
        //    rollColor: "#0f616d",
        //    corner:0
        // });
        // v.button2.addTo(page2);

        // ~~~~~~~  LAYOUT ~~~~~~~~~~~

        var layout2 = v.layout2 = new Layout(page2,[
            {object:header, marginTop:5, backgroundColor: "#0f616d"},
            {object:content, marginTop:5},
            {object:footer, marginTop:5, maxWidth:90, minHeight:15}
        ], 5, "#1b91a3", null, new Shape(), stage);
        layoutManager.add(layout2);

//----------------------------------------------------------------------------//

        // PAGE 3 Success

        var page3 = v.page3 = new Container();

        // ~~~~~~~  HEADER ~~~~~~~~~~~
        var header = new Container(500,100).addTo(page3);
        var logo = new Label("MARLOW").center(header);


        // ~~~~~~~  CONTENT ~~~~~~~~~~~
        var content = new Container(500,500).addTo(page3);
        var circle = v.circle = new Circle(100, model.colors[0])
            .center(content)
            .cur();
        circle.drag();

        // ~~~~~~~  FOOTER ~~~~~~~~~~~
        var footer = v.button3 = new Button(200, 50, "Next").addTo(page3);
        footer.selectedIndex = 1;

                // // ~~~~~~~  FOOTER ~~~~~~~~~~~
                // var footer = v.tabs2 = new Tabs({
                //     tabs:["home", "game"]
                // }).addTo(page2);
                // footer.selectedIndex = 1;

        // ~~~~~~~  LAYOUT ~~~~~~~~~~~

        var layout3 = v.layout3 = new Layout(page3,[
            {object:header, marginTop:5, backgroundColor:frame.yellow},
            {object:content, marginTop:5},
            {object:footer, marginTop:5, maxWidth:90, minHeight:15}
        ], 5, frame.grey, null, new Shape(), stage);
        layoutManager.add(layout3);

//----------------------------------------------------------------------------//

        // PAGE 4 Fail

        var page4 = v.page4 = new Container();

        // ~~~~~~~  HEADER ~~~~~~~~~~~
        var header = new Container(500,100).addTo(page4);
        var logo = new Label("MARLOW").center(header);


        // ~~~~~~~  CONTENT ~~~~~~~~~~~
        var content = new Container(500,500).addTo(page4);
        var circle = v.circle = new Circle(100, model.colors[0])
            .center(content)
            .cur();
        circle.drag();

        // ~~~~~~~  FOOTER ~~~~~~~~~~~
        var footer = v.button4 = new Button(200, 50, "Next").addTo(page4);
        footer.selectedIndex = 1;

                // // ~~~~~~~  FOOTER ~~~~~~~~~~~
                // var footer = v.tabs2 = new Tabs({
                //     tabs:["home", "game"]
                // }).addTo(page2);
                // footer.selectedIndex = 1;

        // ~~~~~~~  LAYOUT ~~~~~~~~~~~

        var layout4 = v.layout4 = new Layout(page4,[
            {object:header, marginTop:5, backgroundColor:frame.yellow},
            {object:content, marginTop:5},
            {object:footer, marginTop:5, maxWidth:90, minHeight:15}
        ], 5, frame.grey, null, new Shape(), stage);
        layoutManager.add(layout3);

//----------------------------------------------------------------------------//

        // PAGE 5 Level 1

        var page5 = v.page5 = new Container();

        // ~~~~~~~  HEADER ~~~~~~~~~~~
        var header = new Container(500,100).addTo(page5);


        //Home Button
        var homeButtonLabel = v.homeButtonLabel = new Label({
           text:"<",
           size:40,
           color:"#0f616d"
        });

        var homeButton = v.homeButton = new Button({
           label:homeButtonLabel,
           width:60,
           height:60,
           color:"#efde5d",
           rollColor: "#0f616d",
           corner:0.5
        });
        v.homeButton.addTo(header).pos(0, 0);
        // Hot to Cold Timer Bar



        // ~~~~~~~  CONTENT ~~~~~~~~~~~
        var content = new Container(500,500).addTo(page5);
        var marlow = frame.asset("marlow.png")
        .addTo(content).pos(50, 100).drag();
        var cactus1 = frame.asset("cactus01med.png")
        .center(content).pos(-50, 210).sca(0.7);
        var cactus2 = frame.asset("cactus02med.png")
        .center(content).pos(230, 430).sca(0.6);
        var graham1 = frame.asset("graham.png")
        .addTo(content).pos(180, 770);
        var graham2 = graham1.clone()
        .addTo(content).pos(230, 640);
        var chocolate = frame.asset("chocolate.png")
        .addTo(content).pos(420, 630);

        marlow.on("pressmove", function() {
           if (marlow.hitTestBounds(cactus1)) {
              zog("hit!")
              // stage.update();
           }
        });



        // ~~~~~~~  LAYOUT ~~~~~~~~~~~

        var layout5 = v.layout5 = new Layout(page5,[
            {object:content, marginTop:5},
            {object:footer, marginTop:5, maxWidth:90, minHeight:15}
        ], 5, "#7ACED6", null, new Shape(), stage);
        layoutManager.add(layout5);

//----------------------------------------------------------------------------//

        // PAGE 6 Level 2

        var page6 = v.page6 = new Container();

        // ~~~~~~~  HEADER ~~~~~~~~~~~
        var header = new Container(500,100).addTo(page6);


        //Home Button
        var homeButtonLabel2 = v.homeButtonLabel.clone();

        var homeButton2 = v.homeButton2 = new Button({
           label:homeButtonLabel2,
           width:60,
           height:60,
           color:"#efde5d",
           rollColor: "#0f616d",
           corner:0.5
        });
        v.homeButton2.addTo(header).pos(0, 0);


        // ~~~~~~~  CONTENT ~~~~~~~~~~~
        var content = new Container(500,500).addTo(page6);
        var cactus16 = cactus1.clone()
        .center(content).pos(100, 410).sca(0.6).rot(-90);
        var cactus26 = cactus2.clone()
        .center(content).pos(290, 500);
        var cactus3 = frame.asset("cactus03med.png")
        .center(content).pos(250, 460).sca(0.6).rot(90);
        var cactus4 = frame.asset("cactus04med.png")
        .center(content).pos(80, 690).sca(0.6);
        var marlow6 = marlow.clone()
        .addTo(content).pos(50, 100);
        var graham16 = graham1.clone()
        .addTo(content).pos(290, 480);
        var graham26 = graham1.clone()
        .addTo(content).pos(20, 770);
        var chocolate6 = chocolate.clone()
        .addTo(content).pos(260,700);


        // ~~~~~~~  LAYOUT ~~~~~~~~~~~

        var layout6 = v.layout6 = new Layout(page6,[
            {object:content, marginTop:5},
            {object:footer, marginTop:5, maxWidth:90, minHeight:15}
        ], 5, "#7ACED6", null, new Shape(), stage);
        layoutManager.add(layout6);

//----------------------------------------------------------------------------//

        // PAGE 7 Level 3

        var page7 = v.page7 = new Container();

        // ~~~~~~~  HEADER ~~~~~~~~~~~
        var header = new Container(500,100).addTo(page7);


        //Home Button
        var homeButtonLabel3 = v.homeButtonLabel.clone();

        var homeButton3 = v.homeButton3 = new Button({
           label:homeButtonLabel3,
           width:60,
           height:60,
           color:"#efde5d",
           rollColor: "#0f616d",
           corner:0.5
        });
        v.homeButton3.addTo(header).pos(0, 0);


        // ~~~~~~~  CONTENT ~~~~~~~~~~~
        var content = new Container(500,500).addTo(page7);
        var cactus17 = cactus1.clone()
        .center(content).pos(370, 450).sca(.5);
        var cactus27 = cactus2.clone()
        .center(content).pos(130, 300).rot(-90);
        var cactus37 = cactus3.clone()
        .center(content).pos(120, 540).rot(0).sca(.7);
        var cactus372 = cactus3.clone()
        .center(content).pos(240, 420).rot(-90).sca(.6);
        var cactus47 = cactus4.clone()
        .center(content).pos(180, 660);
        var cactus472 = cactus4.clone()
        .center(content).pos(80, 460).rot(90);
        var marlow7 = marlow.clone()
        .addTo(content).pos(50, 100);
        var graham17 = graham1.clone()
        .addTo(content).pos(350, 770);
        var graham27 = graham1.clone()
        .addTo(content).pos(40, 770);
        var chocolate7 = chocolate.clone()
        .addTo(content).pos(280,550);


        // ~~~~~~~  LAYOUT ~~~~~~~~~~~

        var layout7 = v.layout7 = new Layout(page7,[
            {object:content, marginTop:5},
            {object:footer, marginTop:5, maxWidth:90, minHeight:15}
        ], 5, "#7ACED6", null, new Shape(), stage);
        layoutManager.add(layout7);

    }

    return app;
}(app || {});
