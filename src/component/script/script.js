const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const union_block = [
    {
        "block_type": "전사",
        "block_class": "블래스터",
        "block_level": "205",
        "block_control_point": { "x": -9, "y": 7 },
        "block_position": [
            { "x": -8, "y": 6 },
            { "x": -9, "y": 6 },
            { "x": -8, "y": 7 },
            { "x": -9, "y": 7 }
        ]
    },
    {
        "block_type": "도적",
        "block_class": "팬텀",
        "block_level": "275",
        "block_control_point": { "x": 4, "y": -8 },
        "block_position": [
            { "x": 5, "y": -9 },
            { "x": 3, "y": -9 },
            { "x": 4, "y": -7 },
            { "x": 4, "y": -9 },
            { "x": 4, "y": -8 }
        ]
    },
    {
        "block_type": "도적",
        "block_class": "나이트로드",
        "block_level": "210",
        "block_control_point": { "x": 1, "y": -9 },
        "block_position": [
            { "x": 0, "y": -8 },
            { "x": 2, "y": -9 },
            { "x": 0, "y": -9 },
            { "x": 1, "y": -9 }
        ]
    }
];

// 원점 설정
const originX = 200;
const originY = 200;

// 블록 크기 설정
const blockSize = 10;

union_block.forEach(block => {
    // 블록 위치를 그립니다.
    block.block_position.forEach(position => {
        // 블록의 유형에 따라 색상을 설정할 수 있습니다.
        ctx.fillStyle = block.block_type === "전사" ? "red" : "blue";
        // 실제 캔버스 위치에 블록을 그립니다.
        ctx.fillRect(originX + (position.x * blockSize), originY - (position.y * blockSize), blockSize, blockSize);
    });
});
