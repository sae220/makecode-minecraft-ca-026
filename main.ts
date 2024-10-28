//% topblock topblockWeight=100 color=#E89005
//% block="地下室のために穴を掘る"
function digHoleForBasement() {
    blocks.fill(
        AIR,
        posAgentCamera(0, -1, 1),
        posAgentCamera(5, -3, 6),
        FillOperation.Replace
    );
}