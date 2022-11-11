function finalPosition(moves){
  let pos = [];
  let x = 0, y = 0;
  for (const move of moves){
    if (move === "north"){
      y++;
    }
    if (move === "south"){
      y--;
    }
    if (move === "west"){
      x--;
    }
    if (move === "east"){
      x++;
    }
  }
  pos[0] = x;
  pos[1] = y;
  console.log(pos);
  return pos;
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];

finalPosition(moves);