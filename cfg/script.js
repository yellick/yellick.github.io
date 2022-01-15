let binds = 'unbindall; bind "0" "incrementvar net_graph 0 1 1"; bind "1" "slot1"; bind "2" "slot2"; bind "3" "slot3"; bind "4" "slot4"; bind "5" "use weapon_c4; drop;"; bind "6" "slot5"; bind "7" "slot12"; bind "9" "slot9"; bind "a" "+moveleft"; bind "b" "buymenu"; bind "c" "slot10"; bind "d" "+moveright"; bind "e" "+use"; bind "f" "+lookatweapon"; bind "g" "drop"; bind "h" "host_timescale 1"; bind "j" "+print"; bind "k" "sm_spray"; bind "l" "toggledetector"; bind "m" "teammenu"; bind "n" "host_timescale 0.3"; bind "q" "lastinv"; bind "r" "+reload"; bind "s" "+back"; bind "t" "+spray_menu"; bind "u" "messagemode2"; bind "v" "slot7"; bind "w" "+forward"; bind "x" "slot6"; bind "y" "messagemode"; bind "z" "radio"; bind "KP_INS" "cl_crosshaircolor_r 255; cl_crosshaircolor_g 0; cl_crosshaircolor_b 0"; bind "KP_END" "cl_crosshaircolor_g 255; cl_crosshaircolor_r 0; cl_crosshaircolor_b 0"; bind "KP_DOWNARROW" "cl_crosshaircolor_r 255; cl_crosshaircolor_g 200; cl_crosshaircolor_b 0"; bind "KP_PGDN" "cl_crosshaircolor_r 0; cl_crosshaircolor_g 255; cl_crosshaircolor_b 255"; bind "KP_LEFTARROW" "incrementvar cl_crosshairgap -4 0 1"; bind "KP_5" "incrementvar cl_crosshairsize 1 3 0.5"; bind "KP_RIGHTARROW" "incrementvar cl_crosshairstyle 4 5 1"; bind "KP_HOME" "incrementvar viewmodel_offset_x -2 2.5 0.5"; bind "KP_UPARROW" "incrementvar viewmodel_offset_y -2 2 0.5"; bind "KP_PGUP" "incrementvar viewmodel_offset_z -2 2 0.5"; bind "KP_SLASH" "mp_roundtime 60; mp_restartgame 1"; bind "KP_MINUS" "sv_airaccelerate 100;sv_autobunnyhopping 1;sv_enablebunnyhopping 1;sv_maxspeed 1000 ;sv_staminajumpcost 0;sv_staminalandcost 0;"; bind "KP_PLUS" "incrementvar cl_crosshairdot 0 1 1"; bind "KP_DEL" "cl_crosshaircolor_r 255; cl_crosshaircolor_g 255; cl_crosshaircolor_b 255"; bind "[" "invprev"; bind "]" "clutch_mode_toggle"; bind "`" "toggleconsole"; bind "," "buy primammo"; bind "/" "+movedown"; bind "\" "sv_rethrow_last_grenade"; bind "-" "sizedown"; bind "=" "sizeup"; bind "SPACE" "+jump"; bind "TAB" "+showscores"; bind "ESCAPE" "cancelselect"; bind "INS" "+klook"; bind "HOME" "exec unsmoked"; bind "END" "centerview"; bind "PGUP" "+lookup"; bind "PGDN" "+lookdown"; bind "PAUSE" "pause"; bind "SHIFT" "+speed;r_cleardecals"; bind "ALT" "noclip"; bind "RALT" "player_ping"; bind "CTRL" "+duck"; bind "LEFTARROW" "+left"; bind "F2" "askconnect_accept"; bind "F3" "autobuy"; bind "F4" "rebuy"; bind "F5" "jpeg"; bind "F10" "quit prompt"; bind "MOUSE1" "+attack"; bind "MOUSE2" "+attack2"; bind "MOUSE3" "toggle cl_righthand 0 1"; bind "MOUSE4" "slot8"; bind "MOUSE5" "+voicerecord"; bind "MWHEELUP" "+jump"; bind "MWHEELDOWN" "+jump";';

let bindsBtn = document.getElementById('copy-binds');
let viewmodelsBtn = document.getElementById('copy-viewmodels');
let crossairBtn = document.getElementById('copy-crossair');
let radarBtn = document.getElementById('copy-radar');

bindsBtn.addEventListener('click', function () {
    /* Get the text field */
    let copyText = binds;

    /* Select the text field */
    copyText.select()

    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Alert the copied text */
    alert("Copied");
})
