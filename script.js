(() => {
    const cheat = async () => {
        let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { 
            return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")); 
        })())[1].children[0]._owner;

        if (stateNode.state.gold === 0) {
            stateNode.setState({ gold: 100, gold2: 100 });
        }

        stateNode._choosePrize ||= stateNode.choosePrize;
        stateNode.choosePrize = function (i) {
            stateNode.state.choices[i] = { type: "swap", val: 0, text: "Swap!", blook: "Unicorn" };
            stateNode._choosePrize(i);
        };
    };

    cheat();
})();
