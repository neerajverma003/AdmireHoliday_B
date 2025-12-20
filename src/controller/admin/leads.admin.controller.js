import PlanYourJourney from '../../models/planYourJuorney.model.js'
import contactModel  from '../../models/contact.model.js'
import subscribeModel from '../../models/subscribe.model.js'
import suggestionComplainModel from '../../models/suggestionComplain.model.js'
import ConsultationLead from '../../models/consultationLead.model.js'

// Plan Your Journey Controller Functions
// Get All Plan Your Journey Data
export const getPlanYourJourney=async(req,res)=>{
    try{
       const Data=await PlanYourJourney.find().sort({createdAt:-1});
       if(!Data){
        return res.status(409).json({msg:"There is no Data for This", success:false})
       }
       return res.status(200).json({msg:"SuccessFully fetched", success:true, Data});
    }
    catch(error){
        console.log(`Get Plan Your Journey ${error}`);
        return res.status(500).json({msg:"Server Error", success:false});
    }
}
// Delete Plan Your Journey Data
export const deletePlanYourJourney=async(req,res)=>{
    try{
        const {id}=req.params;
        const Data=await PlanYourJourney.findByIdAndDelete(id);
        if(!Data){
            return res.status(409).json({msg:"There is no Data for This", success:false})
        }
        return res.status(200).json({msg:"SuccessFully deleted", success:true, Data});
    }
    catch(error){
        console.log(`Delete Plan Your Journey ${error}`);
        return res.status(500).json({msg:"Server Error", success:false});
    }
}
// Archive/Unarchive Plan Your Journey Data
export const archivePalanYourJourney=async(req,res)=>{
    try{
        const {id}=req.params;
        const data=await PlanYourJourney.findById(id);
        if(!data){
            return res.status(409).json({msg:"There is no Data for This", success:false})
        }
        data.archive=!data.archive;
        await data.save();
            return res.status(200).json({msg:"SuccessFully Archived/Unarchived", success:true, data});
    }
    catch(error){
        console.log(`Archive Plan Your Journey ${error}`);
        return res.status(500).json({msg:"Server Error", success:false});
    }
}

// Contact Controller Functions
// Get All Contact Data
export const getContact=async(req,res)=>{
    try{
       const Data=await contactModel.find().sort({createdAt:-1});
       if(!Data){
        return res.status(409).json({msg:"There is no Data for This", success:false})
       }
       return res.status(200).json({msg:"SuccessFully fetched", success:true, Data});
    }
    catch(error){
        console.log(`Get Plan Your Journey ${error}`);
        return res.status(500).json({msg:"Server Error", success:false});
    }
}
// Delete Contact Data
export const deleteContact=async(req,res)=>{
    try{
        const {id}=req.params;
        const Data=await contactModel.findByIdAndDelete(id);
        if(!Data){
            return res.status(409).json({msg:"There is no Data for This", success:false})
        }
        return res.status(200).json({msg:"SuccessFully deleted", success:true, Data});
    }
    catch(error){
        console.log(`Delete Contact ${error}`);
        return res.status(500).json({msg:"Server Error", success:false});
    }
}
// Archive/Unarchive Contact Data
export const archiveContact=async(req,res)=>{
    try{
        const {id}=req.params;
        const data=await contactModel.findById(id);
        if(!data){
            return res.status(409).json({msg:"There is no Data for This", success:false})
        }
        data.archive=!data.archive;
        await data.save();
            return res.status(200).json({msg:"SuccessFully Archived/Unarchived", success:true, data});
    }
    catch(error){
        console.log(`Archive Contact ${error}`);
        return res.status(500).json({msg:"Server Error", success:false});
    }
}

// Subscribe Controller Functions
// Get All Subscribe Data
export const getSubscribe=async(req,res)=>{
    try{
       const Data=await subscribeModel.find().sort({createdAt:-1});
       if(!Data){
        return res.status(409).json({msg:"There is no Data for This", success:false})
       }
       return res.status(200).json({msg:"SuccessFully fetched", success:true, Data});
    }
    catch(error){
        console.log(`Get Plan Your Journey ${error}`);
        return res.status(500).json({msg:"Server Error", success:false});
    }
}
// Delete Subscribe Data
 export const deleteSubscribe=async(req,res)=>{
    try{
        const {id}=req.params;
        const Data=await subscribeModel.findByIdAndDelete(id);
        if(!Data){
            return res.status(409).json({msg:"There is no Data for This", success:false})
        }
        return res.status(200).json({msg:"SuccessFully deleted", success:true, Data});
    }
    catch(error){
        console.log(`Delete Subscribe ${error}`);
        return res.status(500).json({msg:"Server Error", success:false});
    }
}
// Archive/Unarchive Subscribe Data
export const archiveSubscribe=async(req,res)=>{
    try{
        const {id}=req.params;
        const data=await subscribeModel.findById(id);
        if(!data){
            return res.status(409).json({msg:"There is no Data for This", success:false})
        }
        data.archive=!data.archive;
        await data.save();
            return res.status(200).json({msg:"SuccessFully Archived/Unarchived", success:true, data});
    }
    catch(error){
        console.log(`Archive Subscribe ${error}`);
        return res.status(500).json({msg:"Server Error", success:false});
    }
}

// Suggestion and Complain Controller Functions
// Get All Suggestions and Complains Data
export const getSuggestions=async(req,res)=>{
    try{
       const Data=await suggestionComplainModel.find().sort({createdAt:-1});
       if(!Data){
        return res.status(409).json({msg:"There is no Data for This", success:false})
       }
       return res.status(200).json({msg:"SuccessFully fetched", success:true, Data});
    }
    catch(error){
        console.log(`Get Plan Your Journey ${error}`);
        return res.status(500).json({msg:"Server Error", success:false});
    }
}
// Delete Suggestions and Complains Data
export const deleteSuggestions=async(req,res)=>{
    try{
        const {id}=req.params;
        const Data=await suggestionComplainModel.findByIdAndDelete(id);
        if(!Data){
            return res.status(409).json({msg:"There is no Data for This", success:false})
        }
        return res.status(200).json({msg:"SuccessFully deleted", success:true, Data});
    }
    catch(error){
        console.log(`Delete Suggestions ${error}`);
        return res.status(500).json({msg:"Server Error", success:false});
    }
}

// Archive/Unarchive Suggestions and Complains Data
export const archiveSuggestions=async(req,res)=>{
    try{
        const {id}=req.params;
        const data=await suggestionComplainModel.findById(id);
        if(!data){
            return res.status(409).json({msg:"There is no Data for This", success:false})
        }
        data.archive=!data.archive;
        await data.save();
            return res.status(200).json({msg:"SuccessFully Archived/Unarchived", success:true, data});
    }
    catch(error){
        console.log(`Archive Suggestions ${error}`);
        return res.status(500).json({msg:"Server Error", success:false});
    }
}

// Consultation Lead Controller Functions
// Get All Consultation Leads
export const getConsultationLeads=async(req,res)=>{
    try{
       const Data=await ConsultationLead.find().sort({createdAt:-1});
       if(!Data){
        return res.status(409).json({msg:"There is no Data for This", success:false})
       }
       return res.status(200).json({msg:"SuccessFully fetched", success:true, Data});
    }
    catch(error){
        console.log(`Get Consultation Leads ${error}`);
        return res.status(500).json({msg:"Server Error", success:false});
    }
}

// Create Consultation Lead
export const createConsultationLead=async(req,res)=>{
    try{
        const {name, phone, email, state, city, itineraryId, itineraryTitle}=req.body;
        
        // Validate required fields
        if(!name || !phone || !email || !state || !city){
            return res.status(400).json({msg:"All fields are required", success:false});
        }
        
        const consultationLead = new ConsultationLead({
            name,
            phone,
            email,
            state,
            city,
            itineraryId: itineraryId || null,
            itineraryTitle: itineraryTitle || null
        });
        
        const savedLead = await consultationLead.save();
        return res.status(201).json({msg:"Consultation Lead created successfully", success:true, data:savedLead});
    }
    catch(error){
        console.log(`Create Consultation Lead ${error}`);
        return res.status(500).json({msg:"Server Error", success:false});
    }
}

// Delete Consultation Lead
export const deleteConsultationLead=async(req,res)=>{
    try{
        const {id}=req.params;
        const Data=await ConsultationLead.findByIdAndDelete(id);
        if(!Data){
            return res.status(409).json({msg:"There is no Data for This", success:false})
        }
        return res.status(200).json({msg:"SuccessFully deleted", success:true, Data});
    }
    catch(error){
        console.log(`Delete Consultation Lead ${error}`);
        return res.status(500).json({msg:"Server Error", success:false});
    }
}