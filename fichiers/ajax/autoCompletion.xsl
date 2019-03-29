<?xml version="1.0" encoding="UTF-8"?>

<!-- New document created with EditiX at Fri Mar 22 16:57:14 CET 2019 -->

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

	<xsl:output method="html"/>
	<xsl:template match="/">
	<html>
		<body>
            <xsl:apply-templates select="//country"/>
		</body>
	</html>
	</xsl:template>
    
    <xsl:template match="country">
        <xsl:for-each select=".">
           <xsl:value-of select="/name/common"/>
        </xsl:for-each>
    </xsl:template>

</xsl:stylesheet>



