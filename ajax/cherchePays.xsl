<?xml version="1.0" encoding="UTF-8"?>

<!-- New document created with EditiX at Fri Mar 22 16:57:14 CET 2019 -->

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

	<xsl:output method="html"/>
    
	<xsl:param name="nomPays"/>
	<xsl:template match="/">
	<html>
		<body>
            <p id="infos">
                <xsl:value-of select="//name[common=$nomPays]/official"/>, <xsl:value-of select="//country[name/common=$nomPays]/capital"/>
            </p>
		</body>
	</html>
	</xsl:template>

</xsl:stylesheet>


