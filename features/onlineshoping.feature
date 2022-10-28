Feature: SignUp, Sign In and Purchase Product

    
    Scenario: TC-001 Create New user/SignUp
        Given I am on the home page
        Then Navigate to SignUp page
        And create an account with random username 

    Scenario:TC-002 Sign In with newly created user credentials
        Given I am on the Sign In Page
        When Login using newly created credentials
        Then I shall verify the address information in my addresses section    

    Scenario:TC-003 Add product to cart and checkout
        Given I am on the Sign In Page
        When Login using newly created credentials
        Then I am on the MyAccount Page
        Then I add tshirt to cart
        
    