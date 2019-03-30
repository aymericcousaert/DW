<?xml version="1.0" encoding="UTF-8"?>

<!-- New document created with EditiX at Fri Mar 22 16:57:14 CET 2019 -->

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

	<xsl:output method="html"/>
	<xsl:template match="/">
	<html>
		<body>
            <datalist id="pays">
            <xsl:for-each select="//country">
            <option>
                <xsl:attribute name="value">
                    <xsl:value-of select="name/common/text()"/>
                </xsl:attribute>
            </option>
            </xsl:for-each>
            </datalist>
		</body>
	</html>
	</xsl:template>
    
    

</xsl:stylesheet>



