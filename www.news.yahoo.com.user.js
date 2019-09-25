// ==UserScript==
// @name         Yahoo | News
// @namespace    https://news.yahoo.com/
// @version      0.1
// @description  Yahoo | news.yahoo.com | News pages
// @author       oleh.kyshlyan
// @match        http://news.yahoo.com/*
// @match        https://news.yahoo.com/*
// @require      https://code.jquery.com/jquery-3.4.0.min.js
// @grant        none
// ==/UserScript==

var YahooNews = new function(){

  this.YDCBottomCol1 = function(){
    var YDCBottomCol1Inclosure = function(){
      jQuery(function(){
        var YDCBottomCol1 = jQuery("BODY > DIV#app DIV#YDC-MainCanvas DIV[class*='YDC-UniCol1'] DIV#YDC-BottomCol1");
        if(YDCBottomCol1.length == 1){
          YDCBottomCol1.hide();
        }
      });
    }
    setTimeout(YDCBottomCol1Inclosure,3000);
  }

  this.onScrollElements = function(){
    var onScrollElementsInclosure = function(){
      jQuery(function(){
        var shareButtonGroup = jQuery("BODY > DIV#app DIV#YDC-MainCanvas DIV[class*='YDC-UniCol1'] DIV[class*='share-button-group']");
        var shrBtnGrpLev2Parent = shareButtonGroup.parent().parent();
        var shrBtnGrpLev2PrntOriginalStyle = shrBtnGrpLev2Parent.attr("style");
        jQuery(window).on('scroll',function(){
          var shrBtnGrpLev2PrntScrolledStyle = shrBtnGrpLev2Parent.attr("style");
          if(shrBtnGrpLev2PrntScrolledStyle.indexOf('position: fixed;') != -1){
            shrBtnGrpLev2Parent.attr("style",shrBtnGrpLev2PrntOriginalStyle);
          }
        });
      });
    }
    setTimeout(onScrollElementsInclosure,3000);
  }


}

YahooNews.YDCBottomCol1();
YahooNews.onScrollElements();
