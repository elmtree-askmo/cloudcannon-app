---
_schema: default
id: 169219
date: 2025-02-04
title: How do you select and export GIS data while ensuring the correct projection system is used?
article_title: How do you select and export GIS data while ensuring the correct projection system is used?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Digital media
  page_description: >-
    A guide on selecting and exporting GIS data while ensuring the correct projection system is utilized for accurate spatial analysis and data visualization.
  page_keywords: >-
    GIS data, export data, projection system, coordinate reference system, CRS, UTM projection, ArcGIS Pro, spatial analysis, shapefile, verify projection
author: QuickTakes
question: >-
    How do you select and export GIS data while ensuring the correct projection system is used?
answer: >-
    To select and export GIS data while ensuring the correct projection system is used, follow these steps:\n\n1. **Determine the Appropriate Projection**: Before exporting, identify the correct coordinate reference system (CRS) for your data. This can depend on the geographic area you are working with and the purpose of your analysis. For example, if you are working in a specific region, you might choose a UTM (Universal Transverse Mercator) projection that corresponds to that area, such as UTM Zone 18N for parts of the northeastern United States.\n\n2. **Set the Data Frame Projection**: In your GIS software (e.g., ArcGIS Pro), set the projection of the data frame to the desired coordinate system. You can do this by:\n   - Opening Project Properties (Ctrl + Shift + P).\n   - Navigating to the Coordinate Reference System (CRS) settings.\n   - Selecting the appropriate CRS from the predefined options, such as Projected Coordinate Systems > UTM > WGS 1984.\n\n3. **Load Your Data**: Import the shapefile or other GIS data into your project. If the data appears in the wrong location, it may indicate that the coordinate system is not defined or is defined incorrectly. Use the Define Projection tool to align the data to the correct geographic location if necessary.\n\n4. **Export the Data**: Once your data is correctly projected:\n   - Right-click on the layer in the table of contents.\n   - Select `Data > Export Data`.\n   - In the export dialog, choose the option to use the data frame's coordinate system. This ensures that the exported shapefile inherits the projection system you have set for the data frame.\n\n5. **Save the Exported File**: Choose a location and name for your new shapefile, and save it. The exported file will now be in the correct projection system.\n\n6. **Verify the Projection**: After exporting, it’s good practice to verify that the new shapefile has the correct projection. You can do this by checking the properties of the shapefile and ensuring it matches the intended CRS.\n\nBy following these steps, you can effectively select and export GIS data while ensuring that the correct projection system is applied, which is crucial for accurate spatial analysis and data visualization.
subject: Digital media
file_name: how-do-you-select-and-export-gis-data-while-ensuring-the-correct-projection-system-is-used.md
url: /learn/digital-media/questions/how-do-you-select-and-export-gis-data-while-ensuring-the-correct-projection-system-is-used
score: -1.0
---

&nbsp;