// controller
var app = function(app) {

    app.makeController = function(m, v, p) {
        // v.circle.on("click", function() {
        //     v.circle.color = m.nextColor();
        //     stage.update();
        // });

        v.button1.on("mousedown", function() {
            p.go(v.page2);
            v.button1.selectedIndex = 0;
        });

        v.button3.on("mousedown", function() {
            p.go(v.page2);
            v.button4.selectedIndex = 0;
        });

        v.button4.on("mousedown", function() {
            p.go(v.page5);
            v.button4.selectedIndex = 0;
        });

        v.homeButton.on("mousedown", function() {
            p.go(v.page2);
            v.homeButton.selectedIndex = 2;
            v.marlow.removeFrom();
        });

        v.homeButton2.on("mousedown", function() {
            p.go(v.page2);
            v.homeButton2.selectedIndex = 2;
            v.marlow.removeFrom();
        });

        v.homeButton3.on("mousedown", function() {
            p.go(v.page2);
            v.homeButton3.selectedIndex = 2;
            v.marlow.removeFrom();
        });

        v.lvl1Button.on("mousedown", function() {
            p.go(v.page5); //Page 5 is level 1
            v.lvl1Button.selectedIndex = 2;
        });

        v.lvl2Button.on("mousedown", function() {
            p.go(v.page6); //Page 6 is level 2
            v.lvl2Button.selectedIndex = 3;
        });

        v.lvl3Button.on("mousedown", function() {
            p.go(v.page7); //Page 7 is level 3
            v.lvl3Button.selectedIndex = 4;
        });



        var aX = 0;
        var aY = 0;

        frame.on("deviceorientation", function (e) {
            aX = e.rotation.y;
            aY = e.rotation.x;
        });

        p.on("pagetransitioned", function(){
            if (p.page == v.page5){
                v.marlow.pos(stageW/2, 120, stage).sca(0.6);
                v.graham1.pos(140, 570, stage).sca(0.7);
                v.graham2.pos(160, 420, stage).sca(0.7);
                v.chocolate.pos(320, 480, stage).sca(0.7);

                zog("hello");
                stage.update();
            }
            if (p.lastPage == v.page5) {
                hitCheck = false;
                itemSuccess = 0;
                if (v.chocolate.parent) v.chocolate.removeFrom();
                if (v.graham1.parent) v.graham1.removeFrom();
                if (v.graham2.parent) v.graham2.removeFrom();
            }

        });

        var itemSuccess = 0;
        var hitCheck = false;

        Ticker.add(function(){
            v.marlow.x += aX*0.4;
            v.marlow.y += aY*0.4;

            if (v.marlow.x > stage.width-5) {
                v.marlow.x = stage.width-5;
            }
            if (v.marlow.x < 5) {
                v.marlow.x = 5;
            }
            if (v.marlow.y > stage.height-5) {
                v.marlow.y = stage.height-5;
            }
            if (v.marlow.y < 5) {
                v.marlow.y = 5;
            }

            if (hitCheck) return;
            if (!v.marlow.parent) return;

           if (v.cactus1.hitTestRect(v.marlow)) {
              zog("Ouch!")
              // GO TO FAIL PAGE
              hitCheck = true;
              pages.go(v.page4);
              v.marlow.removeFrom();
              if (v.chocolate.parent) v.chocolate.removeFrom();
              if (v.graham1.parent) v.graham1.removeFrom();
              if (v.graham2.parent) v.graham2.removeFrom();
           }
           if (v.cactus2.hitTestRect(v.marlow)) {
              zog("Ouch!")
              hitCheck = true;
              pages.go(v.page4);
              v.marlow.removeFrom();
           }
           if (v.graham1.hitTestBounds(v.marlow)) {
              zog("yum!")
              if (v.graham1.parent) v.graham1.removeFrom();
              itemSuccess += 1;
           }
           if (v.graham2.hitTestRect(v.marlow)) {
              zog("yum!")
              if (v.graham2.parent) v.graham2.removeFrom();
              itemSuccess += 1;
           }
           if (v.chocolate.hitTestBounds(v.marlow)) {
              zog("yum chocolate!")
              if (v.chocolate.parent) v.chocolate.removeFrom();
              itemSuccess += 1;
           }
           if (itemSuccess == 3) {
               zog("Collection Success!")
               // GO TO SUCCESS PAGE
               hitCheck = true;
               pages.go(v.page3);
               v.marlow.removeFrom();
           }

            stage.update();
        })

    }

    return app;
}(app || {});
