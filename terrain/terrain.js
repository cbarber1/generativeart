s=20;w=999;h=800;c=50;r=40;t=[];i=.2;f=0;

setup=_=>{createCanvas(600,600,WEBGL);o=0;
  for(x=0;x<c;x++){p=0;t[x]=[];
    for(y=0;y<r;y++){t[x][y]=noise(p,o)*200-100;p+=i}o+=i}
    frameRate(20)};draw=_=>{clear();f-=i;o=0;rotateX(1);
      translate(-w/2,-h/2);
      for(x=0;x<c;x++){p=f;
        for(y=0;y<r;y++){t[x][y]=noise(p,o)*200-100;p+=i}o+=i;}
        for(y=0;y<r-1;y++){beginShape(TRIANGLE_STRIP);
          for(x=0;x<c;x++){vertex(x*s,y*s,t[x][y]);vertex(x*s,(y+1)*s,t[x][y+1])}endShape()}}
