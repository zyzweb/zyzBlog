``` scss
// 禁止用户选择
user-select: none;
// 禁止用户点击
pointer-events: none;
// 禁用状态提示
cursor: not-allowed;

// 刘海屏处理
//constant在iOS < 11.2的版本中生效，env在iOS >= 11.2的版本中生效,需要同时设置
//<meta name="viewport" content="viewport-fit=cover">需要指定viweport-fit才生效
//safe-area-inset-bottom safe-area-inset-left safe-area-inset-right safe-area-inset-top
body {
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
}

// 媒体查询 media query(与css相反,写在前面的先生效)
@media only screen and (min-width:1200px) and (max-width:1400px) {
  font-size: 2.5vw;
}
@media only screen and(min-width:960px) and (max-width:1200px) {
  font-size: 3vw;
}

@function rem ($num) {
  @return $num/100 * 1rem;
}

// 横屏检测
window.addEventListener("resize", ()=>{
    if (window.orientation === 180 || window.orientation === 0) { 
      // 正常方向或屏幕旋转180度
        console.log('竖屏');
    };
    if (window.orientation === 90 || window.orientation === -90 ){ 
       // 屏幕顺时钟旋转90度或屏幕逆时针旋转90度
        console.log('横屏');
    }  
});
// ____________________________
@media screen and (orientation: portrait) {
  /*竖屏...*/
} 
@media screen and (orientation: landscape) {
  /*横屏...*/
}


// 1px或者用svg
border: thin solid red  (推荐)
@mixin setTopLine($color: rgba(0,0,0,0.1)) {
 content: " ";
 position: absolute;
 pointer-events: none;
 left: 0;
 top: 0;
 right: 0;
 height: 1px;
 border-top: 1px solid $color;
 color: $color;
 transform-origin: 0 0;
 transform: scaleY(0.5);
}



@mixin setBottomLine($color: rgba(0,0,0,0.1)) {
 content: " ";
 position: absolute;
 pointer-events: none;
 left: 0;
 bottom: 0;
 right: 0;
 height: 1px;
 border-bottom: 1px solid $color;
 color: $color;
 transform-origin: 0 100%;
 transform: scaleY(0.5);
}



@mixin setLeftLine($color: rgba(0,0,0,0.1)) {
 content: " ";
 position: absolute;
 pointer-events: none;
 left: 0;
 top: 0;
 width: 1px;
 bottom: 0;
 border-left: 1px solid $color;
 color: $color;
 transform-origin: 0 0;
 transform: scaleX(0.5);
}

@mixin setRightLine($color: rgba(0,0,0,0.1)) {
 content: " ";
 position: absolute;
 pointer-events: none;
 right: 0;
 top: 0;
 width: 1px;
 bottom: 0;
 border-right: 1px solid $color;
 color: $color;
 transform-origin: 100% 0;
 transform: scaleX(0.5);
}

//  弹性布局
@mixin flex-box($justify-content: center, $align-items: center, $flex-direction: row, $flex-wrap: wrap, ) {
  display: flex;
  flex-direction: $flex-direction;
  justify-content: $justify-content;
  align-items: $align-items;
  flex-wrap: $flex-wrap;
}

@mixin clearfix() {
 &::after {
  content: "";
  display: table;
  clear: both;
 }
}


%_onepxElement {
  content: '';
  position: absolute;
}

%_onepxTopBottom {
  @extend %_onepxElement;
  left: 0;
  right: 0;
}

%_onepxLeftRight {
  @extend %_onepxElement;
  top: 0;
  bottom: 0;
}

@mixin setDprBorder($direction: tb) {
  @for $i from 1 through 4 {
    @media screen and (-webkit-min-device-pixel-ratio: $i) {
      @if($direction == tb){
        transform: scaleY(1 / $i);
      } @else if($direction == lr) {
        transform: scaleX(1 / $i);
      } @else if($direction == full) {
        transform: scale(1 / $i);
      }
    }
  }
}

/*
 * 一像素边框
 * $direction: 边框方向，默认底边框
 * $style: 线条样式，默认solid
 * $color: 边框颜色
 */
@mixin one-px-border($direction: bottom, $style: solid, $color: #e5e5e5) {
  position: relative;
  $border: 1px $style $color;
  @if ($direction == bottom) {
    &:after {
      @extend %_onepxTopBottom;
      @include setDprBorder(tb);
      border-top: $border;
      bottom: 0;
    }
  } @else if ($direction == top) {
    &:before {
      @extend %_onepxTopBottom;
      @include setDprBorder(tb);
      border-top: $border;
      top: 0;
    }
  } @else if ($direction == left) {
    &:before {
      @extend %_onepxLeftRight;
      @include setDprBorder(lr);
      border-left: $border;
      left: 0;
    }
  } @else if ($direction == right) {
    &:after {
      @extend %_onepxLeftRight;
      @include setDprBorder(lr);
      border-left: $border;
      right: 0;
    }
  }
}

// 四边一像素边框
@mixin full-px-border($color: #e5e5e5, $radius: 0, $zIndex: -1){
  position: relative;
  z-index: 1;
  &:before{
    content: '';
    position: absolute;
    z-index: $zIndex;
    border: 1px solid $color;
    width: 200%;
    height: 200%;
    border-radius: inherit;
    transform: scale(.5);
    transform-origin: top left;
    border-radius: $radius * 2;
    left: 0;
    top: 0
  }
}

//定位
@mixin center($position: both) {
  position: absolute;

  @if $position == 'vertical' {
    top: 50%;
    transform: translateY(-50%);
  }
  @else if $position == 'horizontal' {
    left: 50%;
    transform: translateX(-50%);
  }
  @else if $position == 'both' {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

//等边三角形 ÏÏ
@mixin triangle($direction: down, $size: 5px, $color: #F96001) {
  width: 0px;
  height: 0px;
  @if ($direction == left) {
    border-top: $size solid transparent;
    border-bottom: $size solid transparent;
    border-right: $size solid $color;
  }
  @else if ($direction == right) {
    border-top: $size solid transparent;
    border-bottom: $size solid transparent;
    border-left: $size solid $color;
  }
  @else if ($direction == down) {
    border-left: $size solid transparent;
    border-right: $size solid transparent;
    border-top: $size solid $color;
  }
  @else {
    border-left: $size solid transparent;
    border-right: $size solid transparent;
    border-bottom: $size solid $color;
  }
}

/**
* 溢出省略号
* @param {Number} 行数
*/
@mixin ellipsis($rowCount: 1) {
  @if $rowCount <=1 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  } @else {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: $rowCount;
    -webkit-box-orient: vertical;
    word-wrap:break-word;
  }
}

//扩展点击区域
@mixin extendClick($top: -10px, $bottom: -10px, $left: -10px, $right: -10px){
  position: relative;
  &:before{
    content: '';
    position: absolute;
    top: $top;
    bottom: $bottom;
    left: $left;
    right: $right;
  }
}

@mixin full-bg($uri) {
  background-image: url($uri);
  background-size: 100%;
  background-repeat: no-repeat;
}

@mixin placeholderColor($color) {
  ::-moz-placeholder {
    color: $color;
  }
  ::-webkit-input-placeholder {
    color: $color;
  }
  :-ms-input-placeholder {
    color: $color;
  }
}
```
