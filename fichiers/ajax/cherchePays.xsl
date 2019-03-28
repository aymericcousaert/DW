<?xml version="1.0" encoding="UTF-8"?>

<!-- New document created with EditiX at Fri Mar 22 16:57:14 CET 2019 -->

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

	<xsl:output method="html"/>
    
	<xsl:param name="nomPays"/>
	<xsl:template match="/">
	<html>
		<body>
            <h3>
                <xsl:value-of select="//name[common=$nomPays]/official"/>
                <p/>
                <xsl:value-of select="//country[name/common=$nomPays]/capital"/>
            </h3>
		</body>
	</html>
	</xsl:template>

</xsl:stylesheet>


