const smartGarbage = function(trash, bins){
  if (trash === 'recycling'){
    bins.recycling++;
  }
  else if (trash === 'waste'){
    bins.waste++;
  }
  else if (trash === 'compost'){
    bins.compost++;
  }
  return bins;
}