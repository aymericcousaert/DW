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
                    Mise en forme par le binôme B3251, Aymeric Cousaert et Mathis Guilhin
                    
                    <xsl:apply-templates select="//metadonnees"/>
                    
                    <hr/>
                    <hr/>
                    
                    Pays avec 6 voisins :
                    <xsl:for-each select = "//country/borders[count(neighbour)=6]/../name/common">
                        <xsl:value-of select = "."/>
                        <xsl:if test="not(position() = last())">, </xsl:if>
                    </xsl:for-each>
                    <p/>
                    Pays ayant le plus court nom :
                    <xsl:for-each select = "//country/name/common">
                        <xsl:sort select = "string-length(.)" data-type="number"/>
                        <xsl:if test="position() = 1">
                            <xsl:value-of select="."/>
                        </xsl:if>
                    </xsl:for-each>
                        
                    <hr/>
                    
                    <xsl:for-each select = "//country/infosContinent/continent[not(preceding::* = .)]">
                        <h3>
                            Pays du continent :
                            <xsl:value-of select = "."/>
                            par sous-régions :
                        </h3>
                        <xsl:for-each select = "//country/infosContinent/subregion[not(preceding::* = .)][../continent[text() = current()]]">
                            <h4>
                                <xsl:value-of select = "."/> (<xsl:value-of select = "count(//country[infosContinent[subregion=current()]])"/> pays)
                            </h4>
                            <table border="3" width="100%" align="center">
                                <xsl:apply-templates select="//country[infosContinent/subregion[text() = current()]]"/>
                            </table>
                        </xsl:for-each>
                    </xsl:for-each>
                    
                </body>
            </html>
            
            </xsl:template>
                <xsl:template match="metadonnees">
                <p style="text-align:center; color:blue;">
                Objectif : <xsl:value-of select="objectif"/>
                </p>
            </xsl:template>

            <xsl:template match="country">
            <xsl:for-each select=".">
            <tr>
                <td>
                    <xsl:value-of select="count(preceding::infosContinent/subregion[text() = current()/infosContinent/subregion/text()]) + 1" />
                </td>
                <td>
                    <p style="text-align:left; color:green;">
                        <xsl:value-of select="name/common"/> (<xsl:value-of select="name/official"/>)
                    </p>
                    <p style="text-align:left; color:brown;">
                        <xsl:value-of select="name/native_name[@lang='fra']/official"/>
                    </p>

                </td>
                <td>
                    <xsl:value-of select="capital"/>
                </td>
                <td>
                    <xsl:if test="count(borders) = 0 and landlocked = 'false'"> Île </xsl:if>
                    <xsl:for-each select="borders/neighbour/text()">
             		<xsl:value-of select="//country[codes/cca3=current()]/name/common"/>
             		<xsl:if test="not(position() = last())">, </xsl:if>
                    </xsl:for-each>
                </td>
                <td>
                    Latitude : <xsl:value-of select="coordinates/@lat"/> <p/>
                    Longitude : <xsl:value-of select="coordinates/@long"/>
                </td>
                <td>
                    <xsl:variable name="code" select="codes/cca2"/>
             
                    <xsl:variable name="lowercase" select="'abcdefghijklmnopqrstuvwxyz'" />
                    <xsl:variable name="uppercase" select="'ABCDEFGHIJKLMNOPQRSTUVWXYZ'" />
                    <img src="{concat('http://www.geonames.org/flags/x/',translate($code, $uppercase, $lowercase),'.gif')}" alt="" height="40" width="60"/>
                </td>
            </tr>
            </xsl:for-each>
            </xsl:template>
</xsl:stylesheet>
