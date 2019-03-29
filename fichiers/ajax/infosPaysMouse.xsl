<?xml version="1.0" encoding="UTF-8"?>

<!-- New document created with EditiX at Fri Mar 22 16:57:14 CET 2019 -->

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

	<xsl:output method="html"/>
	<xsl:param name="nomPays"/>
	<xsl:template match="/">
	<html>
		<body>
            <!--
             <div>
                <xsl:value-of select="//country[name/common=$nomPays]/capital/text()"/>
            </div>
            <div>
                <xsl:variable name="code" select="//country[name/common=$nomPays]/codes/cca2/text()"/>
                <xsl:variable name="lowercase" select="'abcdefghijklmnopqrstuvwxyz'" />
                <xsl:variable name="uppercase" select="'ABCDEFGHIJKLMNOPQRSTUVWXYZ'" />
                <img src="{concat('http://www.geonames.org/flags/x/',translate($code, $uppercase, $lowercase),'.gif')}" alt="" height="40" width="60"/>
                
            </div>
             -->
            
            <table id="tableau" border='3' width = '100%' align='center'>
                <tr>
                    <td id="nomPays">
                        <xsl:value-of select="//country/name[common=$nomPays]/common/text()"/>
                    </td>
                    <td id="capitale">
                        <xsl:value-of select="//country[name/common=$nomPays]/capital/text()"/>
                    </td>
                    <td id="drapeau">
                        <xsl:variable name="code" select="//country[name/common=$nomPays]/codes/cca2/text()"/>
                        <xsl:variable name="lowercase" select="'abcdefghijklmnopqrstuvwxyz'" />
                        <xsl:variable name="uppercase" select="'ABCDEFGHIJKLMNOPQRSTUVWXYZ'" />
                        <img src="{concat('http://www.geonames.org/flags/x/',translate($code, $uppercase, $lowercase),'.gif')}" alt="" height="40" width="60"/>
                    </td>
                </tr>
                
            </table>
		</body>
	</html>
	</xsl:template>

</xsl:stylesheet>


