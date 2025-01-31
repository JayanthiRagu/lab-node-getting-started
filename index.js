class SortedList {
  
  constructor() {
    this.items=[];
    this.length=0;
  }
  add(item) {
      this.items.push(item);
      this.items.sort((a,b)=>a>b?1:-1);
      this.length=this.length+1;
  }
  get(pos) {
    if(pos>=this.length){
      throw new Error('outOfBounds')
      }
      else{
      return this.items[pos];
      }
  }
  max() {
    if(this.length===0)
    {
      throw new Error('EmptySortedList');
    }
    else{
      return Math.max(...this.items);
    }
  }
  min() {
    if(this.length==0)
    {
      throw new Error('EmptySortedList');
    }
    else{
      return Math.min(...this.items);
    }
  }
  avg() {
    if(this.length==0)
    {
      throw new Error('EmptySortedList');
    }
    else{
    const sum=this.items.reduce((total,value)=>{
      return total+value
      },0)
      return (sum/this.items.length);
    }
  }

  sum() {
    const sum=this.items.reduce((total,value)=>{
      return total+value
      },0)
      return sum
  }
  
};

const object=new SortedList();
module.exports = SortedList;
