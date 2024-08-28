var category = context.variableManager.getValue("corr_animalType");
var product = context.variableManager.getValue("corr_categoryId");
var item = context.variableManager.getValue("corr_itemId");

if (item==null){
	context.fail("Variable 'item' not found");
}

logger.debug("Picked a: "+category+" The product is "+product+" The Item picked: "+item+" The LG used "+context.currentLGname);