<?xml version="1.0" encoding="UTF-8"?>

<!-- New document created with EditiX at Fri Mar 22 16:57:14 CET 2019 -->

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

	<xsl:output method="html"/>
	<xsl:param name="nomPays"/>
	<xsl:template match="/">
	<html>
		<body>
            <table id="tableau" border='3' width = '100%' align='center'>
                <tr>
                    <td width="33%" >
                        Pays
                    </td>
                    <td width="33%" >
                        Capitale
                    </td>
                    <td width="33%" >
                        Drapeau
                    </td>
                </tr>
                <tr>
                    <td id="nomPays" width="33%" height="50">
                        <xsl:value-of select="//country/name[common=$nomPays]/common/text()"/>
                    </td>
                    <td id="capitale" width="33%" height="50">
                        <xsl:value-of select="//country[name/common=$nomPays]/capital/text()"/>
                    </td>
                    <td id="drapeau" width="33%" height="50">
                        <xsl:variable name="code" select="//country[name/common=$nomPays]/codes/cca2/text()"/>
                        <xsl:variable name="lowercase" select="'abcdefghijklmnopqrstuvwxyz'" />
                        <xsl:variable name="uppercase" select="'ABCDEFGHIJKLMNOPQRSTUVWXYZ'" />
                        <img src="{concat('http://www.geonames.org/flags/x/',translate($code, $uppercase, $lowercase),'.gif')}" alt="" height="40" width="60"/>
                    </td>
                </tr>
            </table>
            <table id="tableauVide" border='3' width = '100%' align='center'>
                <tr>
                    <td width="33%" >
                        Pays
                    </td>
                    <td width="33%" >
                        Capitale
                    </td>
                    <td width="33%" >
                        Drapeau
                    </td>
                </tr>
                <tr>
                    <td width="33%" height="50">
                        -
                    </td>
                    <td width="33%" height="50">
                        -
                    </td>
                    <td width="33%" height="50">
                        -
                    </td>
                </tr>
            </table>
		</body>
	</html>
	</xsl:template>

</xsl:stylesheet>


