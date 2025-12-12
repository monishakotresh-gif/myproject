$(function () {
    const $chicken = $("#chicken");
    const $msg = $("#msg");

   
    $chicken.css({ position: 'absolute', cursor: 'pointer' });

    function getRandomPosition() {
        const winW = $(window).width();
        const winH = $(window).height();
        const btnW = $chicken.outerWidth();
        const btnH = $chicken.outerHeight();

        const maxX = Math.max(0, winW - btnW - 10);
        const maxY = Math.max(0, winH - btnH - 10);

        const x = Math.floor(Math.random() * maxX);
        const y = Math.floor(Math.random() * maxY);
        return { left: x, top: y };
    }

    function jump() {
        const pos = getRandomPosition();
        $chicken.animate({ left: pos.left, top: pos.top }, 250);
    }

    function taunt() {
        const lines = [
            'Hit hard mann 😎',
            'caugh me if u can😶‍🌫️',
            'I am getting tired 😶‍🌫️'
        ];
        const r = Math.floor(Math.random() * lines.length);
        $msg.text(lines[r]);
    }

    // function jump() {
    //     const winW = $(window).width();
    //     const winH = $(window).height();
    //     const btnW = $chicken.outerWidth();
    //     const btnH = $chicken.outerHeight();

    //     const maxX = Math.max(0, winW - btnW - 10);
    //     const maxY = Math.max(0, winH - btnH - 10);

    //     const x = Math.floor(Math.random() * maxX);
    //     const y = Math.floor(Math.random() * maxY);

    //     $chicken.animate({ left: x, top: y }, 250);
    // }

    $chicken.on('click', function () {
        // show immediate response then taunt and jump shortly after
        $msg.text('Hey! Why did you slap me? 😡😤');
        setTimeout(() => {
            taunt();
            jump();
        }, 400);
    });
});