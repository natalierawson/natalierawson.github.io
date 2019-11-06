xquery version "1.0";

(: 
   New Perspectives on XML, 3rd Edition
   Tutorial 9
   Tutorial Assignment

   Return total revenue grouped by department and store

   Author: Natalie Aldrich    
   Date:       3/21/16

   Filename:   gjc_query7.xq

 :)

import module namespace gjc = "http://www.example.com/gjc" at "gjc_functions.xqm";

<results>{
for $s in $gjc:stores
let $sID := $s/@storeID
return
    <store storeID="{$sID}" location="{$s/city}, {$s/state}">
        {
        for $d in distinct-values($gjc:products/department)
        return
            <department name="{$d}">
                <revenue>
                    {gjc:revenue(gjc:storeDeptOrders($sID, $d))}
                </revenue>
            </department>    
        }
    </store>    
    } </results>

