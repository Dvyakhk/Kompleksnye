function Complex(x,y){
  this.x=x;
  this.y=y;
  this.mod=mod;
  this.arg=arg;
  this.sm=sm;
  this.sum=sum;
  this.sub=sub;
  this.mul=mul;
  this.div=div;
  this.pow=pow;
  this.p=p;
  this.exp=exp;
  this.log=log;
  this.sin=sin;
  this.cos=cos;
  this.tg=tg;
  this.ctg=ctg;
  this.stp=stp;
  this.asin=asin;
  this.acos=acos;
  this.atg=atg;
}

function mod(){
  var t=this.x*this.x+this.y*this.y;
  return Math.sqrt(t);
}

function arg(){
  if (this.x>0 && this.y>=0)
    return Math.atan(this.y/this.x); 
  else if (this.x<0)
    return Math.atan(this.y/this.x)+Math.PI;
  else if (this.x>0 && this.y<0)
    return Math.atan(this.y/this.x)+2*Math.PI;
  else if (this.x==0 && this.y>0)
    return Math.PI/2;
  else if (this.x==0 && this.y<0)
    return 3*Math.PI/2;
  else return 0;
}

function sum(obj){
  var u=this.x+obj.x; 
  var v=this.y+obj.y;
  return new Complex(u,v);
}

function sub(obj){
  var u=this.x-obj.x; 
  var v=this.y-obj.y;
  return new Complex(u,v);
}

function mul(obj){
  var r1=this.mod(),r2=obj.mod();
  var p1=this.arg(),p2=obj.arg();
  var u=r1*r2*Math.cos(p1+p2);
  var v=r1*r2*Math.sin(p1+p2);
  return new Complex(u,v);
}

function div(obj){
  var r1=this.mod(),r2=obj.mod();
  var p1=this.arg(),p2=obj.arg();
  var u=r1/r2*Math.cos(p1-p2);
  var v=r1/r2*Math.sin(p1-p2);
  return new Complex(u,v);
}

function pow(n){
  var r=this.mod(),p=this.arg();
  var u=Math.pow(r,n)*Math.cos(n*p);
  var v=Math.pow(r,n)*Math.sin(n*p);
  return new Complex(u,v);
}

function p(){
  if (Math.abs(this.x)<1.E-7)
    this.x=0;
  if (Math.abs(this.y)<1.E-7)
    this.y=0;
  if (this.y>=0){
    var s=this.x+'+'+this.y+'i';
    return s;
  }
  else{
    var s=this.x+' '+this.y+'i';
    return s;
  }
}

function exp(){
  with (Math){
    var u=exp(this.x)*cos(this.y);
    var v=exp(this.x)*sin(this.y);
    return new Complex(u,v);
  }
}   

function log(){
  with (Math){
    var u=log(this.mod());
    var v=this.arg();
    return new Complex(u,v);
  }
}   

function sm(){
return new Complex(this.x,-this.y);
}

function sin(){
  var i=new Complex(0,1);
  var t=new Complex(2,0);
  var tm1=i.mul(this).exp();
  var tm2=i.sm().mul(this).exp();
  var tm3=i.mul(t);
  return tm1.sub(tm2).div(tm3);
}

function cos(){
  var i=new Complex(0,1);
  var t=new Complex(2,0);
  var tm1=i.mul(this).exp();
  var tm2=i.sm().mul(this).exp();
  return tm1.sum(tm2).div(t);
}

function tg(){
  return this.sin().div(this.cos());
}

function ctg(){
  return this.cos().div(this.sin());
}

function stp(obj){
  return obj.mul(this.log()).exp();
}

function asin(){
var i=new Complex(0,1);
var t=new Complex(1,0);
var tm1=t.sub(this.pow(2)).pow(.5);
var tm2=i.mul(this).sum(tm1);
  return tm2.log().div(i);
}

function acos(){
var i=new Complex(0,1);
var t=new Complex(1,0);
var tm1=this.pow(2).sub(t).pow(.5);
var tm2=this.sum(tm1);
return tm2.log().div(i);
}

function atg(){
var i=new Complex(0,1);
var t=new Complex(1,0);
var tm1=t.sum(i.mul(this));
var tm2=t.sub(i.mul(this));
return tm1.div(tm2).log().div(i.sum(i));
}

function aisp(){  document.forms.z1.value=document.forms.p.value;
}

function bisp(){  document.forms.z2.value=document.forms.p.value;
}
function misa(){  document.forms.m.value=document.forms.z1.value;
}
function nisb(){  document.forms.n.value=document.forms.z2.value;
}
function rism(){  document.forms.p.value=document.forms.m.value;
}
function risn(){  document.forms.p.value=document.forms.n.value;
}
function pisr(){  document.forms.m.value=document.forms.p.value;
}
function bisr(){  document.forms.n.value=document.forms.p.value;
}
function subr(){
var l1=document.forms.z1.value.split(',');
var l2=document.forms.z2.value.split(',');
var x1=parseFloat(l1[0]),y1=parseFloat(l1[1]);
var x2=parseFloat(l2[0]),y2=parseFloat(l2[1]);
var z1=new Complex(x1,y1);
var z2=new Complex(x2,y2);
document.forms.r.value=(z1.sub(z2)).p();
document.forms.p.value=z1.sub(z2).x+','+z1.sub(z2).y;
}
function stpr(){
var l1=document.forms.z1.value.split(',');
var l2=document.forms.z2.value.split(',');
var x1=parseFloat(l1[0]),y1=parseFloat(l1[1]);
var x2=parseFloat(l2[0]),y2=parseFloat(l2[1]);
var z1=new Complex(x1,y1);
var z2=new Complex(x2,y2);
document.forms.r.value=(z1.stp(z2)).p();
document.forms.p.value=z1.stp(z2).x+','+z1.stp(z2).y;
}

function sumr(){
var l1=document.forms.z1.value.split(',');
var l2=document.forms.z2.value.split(',');
var x1=parseFloat(l1[0]),y1=parseFloat(l1[1]);
var x2=parseFloat(l2[0]),y2=parseFloat(l2[1]);
var z1=new Complex(x1,y1);
var z2=new Complex(x2,y2);
document.forms.r.value=(z1.sum(z2)).p();
document.forms.p.value=z1.sum(z2).x+','+z1.sum(z2).y;

}
function mulr(){
var l1=document.forms.z1.value.split(',');
var l2=document.forms.z2.value.split(',');
var x1=parseFloat(l1[0]),y1=parseFloat(l1[1]);
var x2=parseFloat(l2[0]),y2=parseFloat(l2[1]);
var z1=new Complex(x1,y1);
var z2=new Complex(x2,y2);
document.forms.r.value=(z1.mul(z2)).p();
document.forms.p.value=z1.mul(z2).x+','+z1.mul(z2).y;
}
function divr(){
var l1=document.forms.z1.value.split(',');
var l2=document.forms.z2.value.split(',');
var x1=parseFloat(l1[0]),y1=parseFloat(l1[1]);
var x2=parseFloat(l2[0]),y2=parseFloat(l2[1]);
var z1=new Complex(x1,y1);
var z2=new Complex(x2,y2);
document.forms.r.value=(z1.div(z2)).p();
document.forms.p.value=z1.div(z2).x+','+z1.div(z2).y;
}
function modr(){
var l1=document.forms.z1.value.split(',');
var x1=parseFloat(l1[0]),y1=parseFloat(l1[1]);
var z1=new Complex(x1,y1);
document.forms.r.value=z1.mod();
document.forms.p.value=z1.mod();
}
function argr(){
var l1=document.forms.z1.value.split(',');
var x1=parseFloat(l1[0]),y1=parseFloat(l1[1]);
var z1=new Complex(x1,y1);
document.forms.r.value=z1.arg();
document.forms.p.value=z1.arg();
}
function smr(){
var l1=document.forms.z1.value.split(',');
var x1=parseFloat(l1[0]),y1=parseFloat(l1[1]);
var z1=new Complex(x1,y1);
document.forms.r.value=(z1.sm()).p();
document.forms.p.value=(z1.sm()).x+','+(z1.sm()).y;
}
function expr(){
var l1=document.forms.z1.value.split(',');
var x1=parseFloat(l1[0]),y1=parseFloat(l1[1]);
var z1=new Complex(x1,y1);
document.forms.r.value=(z1.exp()).p();
document.forms.p.value=(z1.exp()).x+','+(z1.exp()).y;
}
function logr(){
var l1=document.forms.z1.value.split(',');
var x1=parseFloat(l1[0]),y1=parseFloat(l1[1]);
var z1=new Complex(x1,y1);
document.forms.r.value=(z1.log()).p();
document.forms.p.value=(z1.log()).x+','+(z1.log()).y;
}
function sinr(){
var l1=document.forms.z1.value.split(',');
var x1=parseFloat(l1[0]),y1=parseFloat(l1[1]);
var z1=new Complex(x1,y1);
document.forms.r.value=(z1.sin()).p();
document.forms.p.value=(z1.sin()).x+','+(z1.sin()).y;
}
function cosr(){
var l1=document.forms.z1.value.split(',');
var x1=parseFloat(l1[0]),y1=parseFloat(l1[1]);
var z1=new Complex(x1,y1);
document.forms.r.value=(z1.cos()).p();
document.forms.p.value=(z1.cos()).x+','+(z1.cos()).y;
}
function asinr(){
var l1=document.forms.z1.value.split(',');
var x1=parseFloat(l1[0]),y1=parseFloat(l1[1]);
var z1=new Complex(x1,y1);
document.forms.r.value=(z1.asin()).p();
document.forms.p.value=(z1.asin()).x+','+(z1.asin()).y;
}
function acosr(){
var l1=document.forms.z1.value.split(',');
var x1=parseFloat(l1[0]),y1=parseFloat(l1[1]);
var z1=new Complex(x1,y1);
document.forms.r.value=(z1.acos()).p();
document.forms.p.value=(z1.acos()).x+','+(z1.acos()).y;
}
function atgr(){
var l1=document.forms.z1.value.split(',');
var x1=parseFloat(l1[0]),y1=parseFloat(l1[1]);
var z1=new Complex(x1,y1);
document.forms.r.value=(z1.atg()).p();
document.forms.p.value=(z1.atg()).x+','+(z1.atg()).y;
}
function sm2r(){
var l1=document.forms.z2.value.split(',');
var x1=parseFloat(l1[0]),y1=parseFloat(l1[1]);
var z1=new Complex(x1,y1);
document.forms.r.value=(z1.sm()).p();
document.forms.p.value=(z1.sm()).x+','+(z1.sm()).y;
}
