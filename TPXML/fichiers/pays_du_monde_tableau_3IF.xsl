<?xml version="1.0" encoding="UTF-8"?>

<!-- New document created with EditiX at Fri Mar 22 16:57:14 CET 2019 -->

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

        <xsl:output method="html"/>
	
            <xsl:template match="/">
            <html>
             <head>
                <title>
                Pays du monde
              </title>
             </head>

             <body style="background-color:white;">
               <h1>Les pays du monde</h1>
                  Mise en forme par le binôme (B3251), Aymeric Cousaert et Mathis Guilhin
                  <xsl:apply-templates select="//metadonnees"/>
                  <table border="3" width="600" align="center">
                  <xsl:apply-templates select="//country"/>
                  </table>




             </body>
            </html>
            </xsl:template>

            <xsl:template match="metadonnees">
             <p style="text-align:center; color:blue;">
                    Objectif : <xsl:value-of select="objectif"/>
             </p><hr/>
            </xsl:template>



            <xsl:template match="country">

           <xsl:for-each select="name">
             <tr> <td>
             <p style="text-align:left; color:green;">
            <xsl:value-of select="common"/> (<xsl:value-of select="official"/>)
            </p>
            <p style="text-align:left; color:brown;">
           <xsl:value-of select="native_name[@lang='fra']/official"/>
           </p>

             </td>
             <td>
             <xsl:value-of select="../capital"/>
             </td>
             <td>
             <xsl:value-of select="../borders/neighbour"/>
             </td>
</tr>


           </xsl:for-each>

            </xsl:template>



</xsl:stylesheet>
