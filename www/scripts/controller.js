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

        v.homeButton.on("mousedown", function() {
            p.go(v.page2);
            v.homeButton.selectedIndex = 2;
        });

        v.homeButton2.on("mousedown", function() {
            p.go(v.page2);
            v.homeButton2.selectedIndex = 2;
        });

        v.homeButton3.on("mousedown", function() {
            p.go(v.page2);
            v.homeButton3.selectedIndex = 2;
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

        frame.on("devicemotion", function (e) {

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
            v.marlow.x += e.acceleration.x*3;
            v.marlow.y += e.acceleration.y*3;
            // v.marlow.z += e.acceleration.z*3;
            stage.update();

        });

    }

    return app;
}(app || {});
