// controller
var app = function(app) {

    app.makeController = function(m, v, p) {
        v.circle.on("click", function() {
            v.circle.color = m.nextColor();
            stage.update();
        });

        v.button1.on("mousedown", function() {
            p.go(v.page2);
            v.button1.selectedIndex = 0;
        });

        // v.button2.on("mousedown", function() {
        //     p.go(v.page1);
        //     v.button2.selectedIndex = 1;
        // });

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

    }

    return app;
}(app || {});
