package com.ecommerce.config;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import javax.persistence.EntityManager;
import javax.persistence.metamodel.EntityType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;

import com.ecommerce.entity.Country;
import com.ecommerce.entity.Product;
import com.ecommerce.entity.ProductCategory;
import com.ecommerce.entity.State;

@Configuration
public class MyDataRestConfig implements RepositoryRestConfigurer {

	
	private EntityManager entityManager;
	
	
	@Autowired
	public MyDataRestConfig(EntityManager theEntityManager)
	{
		entityManager=theEntityManager;
	}
	
	 
    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {

        HttpMethod[] theUnsupportedActions = {HttpMethod.PUT, HttpMethod.POST, HttpMethod.DELETE, HttpMethod.PATCH};

        // disable HTTP methods for Product: PUT, POST, DELETE and PATCH
        disableHttpMethods(Product.class,config, theUnsupportedActions);

        // disable HTTP methods for ProductCategory: PUT, POST, DELETE and PATCH
        disableHttpMethods(ProductCategory.class,config, theUnsupportedActions);

        //disable HTTP methods for country
        disableHttpMethods(Country.class,config, theUnsupportedActions);

      //disable HTTP methods for state
        disableHttpMethods(State.class,config, theUnsupportedActions);

        //helper method
        exposeIds(config);
    }


	private void disableHttpMethods(Class theClass,RepositoryRestConfiguration config, HttpMethod[] theUnsupportedActions) {
		config.getExposureConfiguration()
                .forDomainType(theClass)
                .withItemExposure((metdata, httpMethods) -> httpMethods.disable(theUnsupportedActions))
                .withCollectionExposure((metdata, httpMethods) -> httpMethods.disable(theUnsupportedActions));
	}
    
    private void exposeIds(RepositoryRestConfiguration config)
    {
    	Set<EntityType<?>> entities=entityManager.getMetamodel().getEntities();
    	
    	List<Class> entityClasses= new ArrayList<>();
    	
    	for(EntityType tempEntity : entities)
    		entityClasses.add(tempEntity.getJavaType());
    	
        Class[] domainTypes = entityClasses.toArray(new Class[0]);

        config.exposeIdsFor(domainTypes);
    }
    
}