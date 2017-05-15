// module.exports  = function(){
//     console.log('hello China!');
// }
import React from 'react';
import  './china.css';

function testProxy(){
        $.get('/api/getUser',{id:1},function(res,status,xhr){
            console.log(res);
        });
        $.get('http://localhost:3000/getUser',{id:1},function(res,status,xhr){
            console.log(res);
        });
}
/**
 *
 *
 */
function determineDate() {
  import('moment').then(function(moment) {
    console.log(moment().format());
  }).catch(function(err) {
    console.log('Failed to load moment', err);
  });
}

function determineDate2() {
  require.ensure([], function(require) {
    var moment = require('moment');
    console.log(moment().format());
  });
}



export default function(){
    console.log('load China!!!');
    testProxy();
    return <div className = 'china' onClick = {determineDate2}>hello china!!</div>;
}
